from pwn import *
import re

context.log_level = 'debug'

def calculate_expression(data):
    # 使用更精确的正则表达式，确保负号和数字正确分组
    tokens = re.findall(r'-?\d+|[-+]', data)
    if not tokens:
        raise ValueError("无法解析表达式")
    
    # 处理可能的负号开头
    if tokens[0] == '-':
        tokens = [tokens[0] + tokens[1]] + tokens[2:]
    
    # 合并连续的运算符
    i = 1
    while i < len(tokens):
        if tokens[i] in '+-' and tokens[i-1] in '+-':
            # 处理连续运算符
            op1 = tokens[i-1]
            op2 = tokens[i]
            combined_op = '+' if (op1 == op2) else '-'
            tokens[i-1] = combined_op
            del tokens[i]
        else:
            i += 1
    
    # 计算结果
    result = int(tokens[0])
    for i in range(1, len(tokens), 2):
        op = tokens[i]
        num = int(tokens[i+1])
        if op == '+':
            result += num
        elif op == '-':
            result -= num
    return result

def solve():
    conn = remote('10.214.160.13', 11002)
    
    try:
        # 跳过欢迎信息（直到出现题目）
        conn.recvuntil(' = ')
        
        # 接收完整的表达式（假设以 ' = ' 结尾）
        data = conn.recvuntil(' = ').decode().strip()
        
        # 如果表达式以空格开头，去除空格
        data = data.lstrip()
        
        # 计算答案
        answer = calculate_expression(data)
        conn.sendline(str(answer).encode())
        
        # 接收后续输出（如 flag）
        print(conn.recvall().decode())
        
    except Exception as e:
        print(f"错误: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    solve()
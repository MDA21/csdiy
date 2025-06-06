from pwn import *
context.log_level='debug'

def solve():
    r=remote('10.214.160.13',11002)
    
    def recv_one_question():
        buf=b""
        while 1:
            data=r.recv(1)
            if data==b'=':
                return buf
            buf+=data

    for _ in range(7):
        r.recvline()    #接收欢迎信息

    for _ in range(10):
        question=recv_one_question()
        ans=eval(question)
        r.sendline(str(ans).encode())
        r.recvline()
        r.recvline()    #接收解出一题之后的祝贺

    print(r.recvall().decode())     #接收flag

if __name__ == "__main__":
    solve()
    
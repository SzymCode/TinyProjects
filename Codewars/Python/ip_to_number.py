# https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/python

def ip_to_num(ip_address):
    octets = ip_address.split('.')
    num = 0
    for octet in octets:
        num = (num << 8) + int(octet)
    return num

def num_to_ip(num):
    ip_address = []
    for _ in range(4):
        ip_address.append(str(num & 255))
        num >>= 8
    return '.'.join(reversed(ip_address))
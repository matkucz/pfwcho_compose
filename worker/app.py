import os
import time
import redis

fib_array = [0, 1]
def fibonacci (num):
    if num <= 0:
        pass
    elif num <= len(fib_array):
        return fib_array[num - 1]
    else:
        temp_fib = fibonacci(num - 1) + fibonacci(num - 2)
        fib_array.append(temp_fib)
        return temp_fib

r = redis.from_url(
    f"redis://:{os.getenv('REDIS_PASSWORD', '')}@{os.getenv('REDIS_HOST')}:{os.getenv('REDIS_PORT')}"
)
p = r.pubsub()
p.subscribe('mes')
while True:
    message = p.get_message()
    if message:
        r.hset("values", int(message["data"]), fibonacci(int(message["data"])+ 1))
    time.sleep(0.001)
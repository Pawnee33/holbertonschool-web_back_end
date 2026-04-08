#!/usr/bin/env python3
"""Module asynchronous coroutine multple wait_random"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Returns a random value between 0 and max_delay"""
    delay = []

    async def append_result(list):
        result = await list
        delay.append(result)

    await asyncio.gather(*(append_result(wait_random(max_delay)) for _ in range(n)))
    return delay

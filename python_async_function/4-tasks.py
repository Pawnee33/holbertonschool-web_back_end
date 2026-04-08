#!/usr/bin/env python3
"""Module containing task_wait_n using task_wait_random"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Returns a random value between 0 and max_delay"""
    delay = []

    async def append_result(task):
        """Sorted list"""
        result = await task
        delay.append(result)

    await asyncio.gather(*(
        append_result(task_wait_random(max_delay)) for _ in range(n)))
    return delay

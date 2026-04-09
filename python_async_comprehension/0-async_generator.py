#!/usr/bin/env python3
"""Module that use type-annotated async_generator function"""
import asyncio
import random
from typing import Generator


async def async_generator():
    """Coroutine generator"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

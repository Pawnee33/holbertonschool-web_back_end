#!/usr/bin/env python3
"""Module that use coroutine async_comprehension function"""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers via async comprehension and return them"""
    return [index async for index in async_generator()]

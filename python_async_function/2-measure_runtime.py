#!/usr/bin/env python3
"""Module to measure the runtime of wait_n"""
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the average execution time per coroutine of wait_n"""
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    total_time = time.perf_counter() - start

    return total_time / n

#!/usr/bin/env python3
"""Module that a index_range function takes two integer arguments"""
from typing import Tuple


def index_range(page: int, page_size: int) -> tuple:
    """
    Return a tuple of start and end indexes for a given page and page size.

    Args:
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple (start_index, end_index).
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)

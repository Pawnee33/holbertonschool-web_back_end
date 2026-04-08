#!/usr/bin/env python3
"""Module that use type-annoated sum_list function"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Returns the sum of input_list list"""
    return sum(input_list)

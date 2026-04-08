#!/usr/bin/env python3
"""Module that use type-annotated sum_mixed_list"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of sum_mixed_list"""
    return float(sum(mxd_lst))

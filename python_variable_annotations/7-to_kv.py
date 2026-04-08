#!/usr/bin/env python3
"""Module that use type-annotated to_kv function"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns tuple of the string k and the square v as float"""
    return (k, v ** 2)

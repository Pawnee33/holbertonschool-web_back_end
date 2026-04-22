#!/usr/bin/env python3
'''Module returns the list of school having
a specific topic'''


def schools_by_topic(mongo_collection, topic):
    """Filters by topics"""
    return list(mongo_collection.find({"topics": topic}))

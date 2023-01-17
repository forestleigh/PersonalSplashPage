from collections import namedtuple
from typing import List, Any

import numpy as np

Snowflake = namedtuple("snowflake", ["pos_x", "pos_y", "vel_x", "vel_y"])




def updateAllPositions(
    snowflakesList: List[Any],
    cursor_x: float,
    cursor_y: float,
    cursor_clicking: bool,
    dt: float,
):
    return [
        updatePosition(flake, cursor_x, cursor_y, cursor_clicking, dt)
        for flake in snowflakesList
    ]


def updatePosition(
    snowflake: Any,
    cursor_x: float,
    cursor_y: float,
    cursor_clicking: bool,
    dt: float,
):

    flake_pos_x, flake_pos_y, flake_vel_x, flake_vel_y = snowflake  # deconstruct

    # first, change velocities per forces
    accel_gravity_x = 0.0
    accel_gravity_y = -gravitational_constant

    delta_cursor_flake_pos_x = flake_pos_x - cursor_x
    delta_cursor_flake_pos_y = flake_pos_y - cursor_y
    delta_cursor_flake_pos = np.sqrt(
        delta_cursor_flake_pos_x * 2 + delta_cursor_flake_pos_y * 2
    )  # pythagorean theorem
    # print("dcfp:", delta_cursor_flake_pos)
    if delta_cursor_flake_pos <= max_cursor_range:
        if cursor_clicking:
            k_cursor = k_cursor_gravity_click
        else:
            k_cursor = k_cursor_gravity
        print(k_cursor, cursor_clicking)
        accel_cursor = k_cursor / ((delta_cursor_flake_pos ** 2) + epsilon_division)
        accel_cursor_x = accel_cursor * (
            delta_cursor_flake_pos_x / delta_cursor_flake_pos
        )
        accel_cursor_y = accel_cursor * (
            delta_cursor_flake_pos_y / delta_cursor_flake_pos
        )
    else:
        accel_cursor_x = 0.0
        accel_cursor_y = 0.0

    accel_random_x = np.random.uniform(-random_accel_range_x, random_accel_range_x)
    accel_random_y = np.random.uniform(-random_accel_range_y, random_accel_range_y)

    accel_total_x = 0.0
    accel_total_x += accel_gravity_x
    accel_total_x += accel_cursor_x
    accel_total_x += accel_random_x

    accel_total_y = 0.0
    accel_total_y += accel_gravity_y
    accel_total_y += accel_cursor_y
    accel_total_y += accel_random_y

    flake_vel_x *= pow(drag_coeff, dt)
    flake_vel_y *= pow(drag_coeff, dt)

    flake_vel_x += accel_total_x * dt
    flake_vel_y += accel_total_y * dt

    flake_pos_x += flake_vel_x * dt
    flake_pos_y += flake_vel_y * dt

    return Snowflake(flake_pos_x, flake_pos_y, flake_vel_x, flake_vel_y)


# sf_all = []
# for _ in range(50):
#     sf_all.append(Snowflake(pos_x=np.random.uniform(-)))
sf = Snowflake(pos_x=0.0, pos_y=0.0, vel_x=0.0, vel_y=0.0)
cursor_pos_x = 0.0
cursor_pos_y = 50.0
cursor_clicking = True
sf_new = sf
print(sf)
for _ in range(10):
    sf_new = updatePosition(
        sf_new,
        cursor_x=cursor_pos_x,
        cursor_y=cursor_pos_y,
        cursor_clicking=cursor_clicking,
        dt=0.1,
    )
    print(sf_new)
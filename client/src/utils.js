import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import model from "./config";

export function random(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min
    return randomNumber.floor(2);
}

export function updateAllPositions(particleList, mousePosition, mouseClicked, deltaTime) {
  const newParticleList = [];
  for (let flake in particleList) {
    // update the position of each flake in particles based on model
    newParticleList.push(
      updatePosition(flake, mousePosition, mouseClicked, deltaTime)
    );
  }
  return newParticleList
};

export function updatePosition (flake, mousePosition, mouseClicked, deltaTime) {
  // deconstruct variables
  const [flake_pos_x, flake_pos_y, flake_vel_x, flake_vel_y] = flake;

  // next define the four forces: gravity, cursor, random, and drag
    const accel_gravity_x = 0.0;
    const accel_gravity_y = -1 * model.gravitational_constant;

    const accel_cursor = setCursorGravity(flake_pos_x, flake_pos_y, mousePosition, mouseClicked);
    const accel_cursor_x = accel_cursor.x;
    const accel_cursor_y = accel_cursor.y;

    const accel_random_x = np.random.uniform(-random_accel_range_x, random_accel_range_x)
    const accel_random_y = np.random.uniform(-random_accel_range_y, random_accel_range_y)

    let accel_total_x = 0.0;
    accel_total_x += accel_gravity_x;
    accel_total_x += accel_cursor_x;
    accel_total_x += accel_random_x;

    let accel_total_y = 0.0;
    accel_total_y += accel_gravity_y;
    accel_total_y += accel_cursor_y;
    accel_total_y += accel_random_y;

    // implement a simplified drag on starting velocity
    flake_vel_x *= pow(drag_coeff, deltaTime);
    flake_vel_y *= pow(drag_coeff, deltaTime);

    // update velocity with new accelerations
    flake_vel_x += accel_total_x * deltaTime;
    flake_vel_y += accel_total_y * deltaTime;

    // update positions based on previous postion, velocity and time
    flake_pos_x += flake_vel_x * deltaTime;
    flake_pos_y += flake_vel_y * deltaTime;

    return [flake_pos_x, flake_pos_y, flake_vel_x, flake_vel_y];
}

export function setCursorGravity(flake_pos_x, flake_pos_y, mousePosition, mouseClicked) {
  // find distance in x and y between cursor and flake
  const delta_cursor_flake_pos_x = flake_pos_x - mousePosition.x;
  const delta_cursor_flake_pos_y = flake_pos_y - mousePosition.y;
  // use pythagorean theorem to get cursor distance from the flake
  const delta_cursor_flake_pos = Math.sqrt(Math.pow(delta_cursor_flake_pos_x,2) + Math.pow(delta_cursor_flake_pos_y,2));

  // check if in range
  if (delta_cursor_flake_pos <= model.max_cursor_range) {
    // if we're in range and mouse is clicked repel else attract
    model.mouseClicked ? k_cursor = model.k_cursor_gravity_click : k_cursor = model.k_cursor_gravity;
    
    const accel_cursor = k_cursor / ((delta_cursor_flake_pos ** 2) + model.epsilon_division);
    
    accel_cursor_x = accel_cursor * (delta_cursor_flake_pos_x / delta_cursor_flake_pos);
    accel_cursor_y = accel_cursor * (delta_cursor_flake_pos_y / delta_cursor_flake_pos);
  } else {
    accel_cursor_x = 0.0;
    accel_cursor_y = 0.0;
  }

  return {x:accel_cursor_x, y:accel_cursor_y};
}

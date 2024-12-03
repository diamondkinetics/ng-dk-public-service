import { AbstractSensorEventDTOV3, BattingOrientation, SwingDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3.mock';

export const mockSwingDTOV3 = extend<AbstractSensorEventDTOV3, SwingDTOV3>(mockAbstractSensorEventDTOV3, {
  analyzerResult: () => undefined,
  powerApplied: () => faker.number.int(100),
  powerAccelMax: () => faker.number.int(100),
  powerMomentumImpact: () => faker.number.int(100),
  speedBarrelMax: () => faker.number.int(100),
  speedEfficiency: () => faker.number.int(100),
  speedHandsMax: () => faker.number.int(100),
  quicknessTriggerImpact: () => faker.number.int(100),
  controlApproachAngleImpact: () => faker.number.int(100),
  controlDistanceInTheZone: () => faker.number.int(100),
  controlHandCastMax: () => faker.number.int(100),
  exitDistanceFt: () => faker.number.int(100),
  exitHeadingAngleDeg: () => faker.number.int(100),
  exitLaunchAngleDeg: () => faker.number.int(100),
  exitSpeedMph: () => faker.number.int(100),
  potentialExitDistanceFt: () => faker.number.int(100),
  potentialExitHeadingAngleDeg: () => faker.number.int(100),
  potentialExitLaunchAngleDeg: () => faker.number.int(100),
  potentialExitSpeedMph: () => faker.number.int(100),
  swingPlaneHeadingAngle: () => faker.number.int(100),
  swingPlaneSteepnessAngle: () => faker.number.int(100),
  swingPlaneTiltAngle: () => faker.number.int(100),
  percentageOnSwingPlane: () => faker.number.int(100),
  ballLocationAngle: () => faker.number.int(100),
  impact_loc_x: () => faker.number.int(100),
  impact_loc_y: () => faker.number.int(100),
  impact_loc_z: () => faker.number.int(100),
  slot_dir_x: () => faker.number.int(100),
  slot_dir_y: () => faker.number.int(100),
  slot_dir_z: () => faker.number.int(100),
  impact_velo: () => faker.number.int(100),
  max_dist: () => faker.number.int(100),
  handedness: () => faker.helpers.arrayElement(BattingOrientation.asArray().map(bo => bo.getName())),
});
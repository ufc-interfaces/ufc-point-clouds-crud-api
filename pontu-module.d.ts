import {ClosestAlgoType, CloudJson, Matrix4} from "./src/@types/common";

declare module 'pontu-module' {
  function cloud_save_sync(cloudObj: CloudJson, filename: string): void;

  function registration_icp_sync(
    source: CloudJson,
    target: CloudJson,
    th: number,
    k: number,
    maxDist: number,
    closestType: ClosestAlgoType
  ): {
    tm: Matrix4,
    alignCloud: CloudJson
  };

  function cloud_rmse(
    source: CloudJson,
    target: CloudJson,
    maxDist: number,
    closestType: ClosestAlgoType
  ): number
}

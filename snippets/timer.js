import { performance } from "perf_hooks";

function withPerformanceTimer(callback, args) {
  let t1 = performance.now();
  callback(args);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
}

export default withPerformanceTimer;

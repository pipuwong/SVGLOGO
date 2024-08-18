import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
const SVGL_API_REQUESTS = "1";
const UPSTASH_REDIS_URL = "";
const UPSTASH_REDIS_TOKEN = "";
const redis = new Redis({
  url: UPSTASH_REDIS_URL,
  token: UPSTASH_REDIS_TOKEN
});
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(Number(SVGL_API_REQUESTS), "60s"),
  analytics: true
});
export {
  ratelimit as r
};

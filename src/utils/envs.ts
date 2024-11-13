export function getEnv(envName: string, defaultValue: string): string | undefined {
  try {
    return process.env[envName] || defaultValue;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
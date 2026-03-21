/**
 * Cloudflare Workers runtime helpers.
 * Access bindings via Astro.locals.runtime.env in SSR pages/API routes.
 *
 * Usage:
 *   const { env, ctx } = Astro.locals.runtime;
 *   const value = await getFromKV(env.MY_KV, 'key');
 */

export async function getFromKV(
	kv: KVNamespace,
	key: string,
): Promise<string | null> {
	return kv.get(key);
}

export async function putToKV(
	kv: KVNamespace,
	key: string,
	value: string,
	expirationTtl?: number,
): Promise<void> {
	await kv.put(key, value, expirationTtl ? { expirationTtl } : undefined);
}

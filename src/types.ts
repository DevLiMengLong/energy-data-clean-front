export type Language = 'zh' | 'en';

export interface CurrentUser {
  id: number;
  tenant_id?: number | null;
  account: string;
  username: string;
  role_type: 'PLATFORM_ADMIN' | 'TENANT_ADMIN' | 'TENANT_USER';
  tenant_name?: string | null;
  tenant_mark?: string | null;
}

export interface MicroAppContext {
  apiBase: string;
  token: string;
  routePath: string;
  language: Language;
}

export interface MicroAppHandle {
  unmount(): void;
}

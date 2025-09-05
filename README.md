
# Next.js + Azure AD + Microsoft Graph (SharePoint) — Starter

App base con login Microsoft Entra ID (Azure AD) y CRUD mínimo sobre SharePoint Lists vía Graph.

## 1) Requisitos
- Node 18+
- Una App registrada en Microsoft Entra ID (Azure AD)
- Permisos delegados de Microsoft Graph:
  - `openid`, `profile`, `email`, `offline_access`
  - `User.Read`
  - `Sites.ReadWrite.All` (o `Sites.Read.All` si solo lectura)

## 2) Registro en Entra ID
1. Entra ID → App registrations → **New registration**.
2. Nombre: `econ-web-starter` (o el que quieras).
3. Tipo de cuenta: *Single tenant* (recomendado para empezar).
4. Redirect URI (web): `http://localhost:3000/api/auth/callback/azure-ad`.
5. Crea un **Client Secret** (guárdalo).

**API permissions → Microsoft Graph (Delegated)**: agrega los scopes listados arriba y **Grant admin consent**.

## 3) Variables de entorno
Copia `.env.example` a `.env.local` y completa:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=...

AZURE_AD_CLIENT_ID=...
AZURE_AD_CLIENT_SECRET=...
AZURE_AD_TENANT_ID=...

GRAPH_SITE_ID=...
GRAPH_LIST_ID=...
```

## 4) Obtener `GRAPH_SITE_ID` y `GRAPH_LIST_ID`
- Ve a tu sitio de SharePoint (ej: `https://TU_TENANT.sharepoint.com/sites/ProyectoX`).
- Para el **Site ID**: abre `https://TU_TENANT.sharepoint.com/sites/ProyectoX/_api/site/id` y toma el `Id`.
  - También puedes usar Graph: `/sites/root:` + ruta del sitio + `:/` (en Graph Explorer).
- Para el **List ID**:
  - En el sitio → Listas → abre tu lista → agrega a la URL: `/_api/web/lists/getbytitle('NOMBRE')/id` y copia el `Id`.
  - O con Graph: `/sites/{siteId}/lists` y busca tu lista.

**Formato de `GRAPH_SITE_ID`** (si usas Graph): `TU_TENANT.sharepoint.com,GUID1,GUID2`.

## 5) Ejecutar
```bash
npm i
npm run dev
# abrir http://localhost:3000
```

## 6) Probar CRUD rápido
- Entra a `/secure` (te pedirá login).
- En el formulario, crea un ítem con `Title`. Debe aparecer en la tabla.
- Revisa tu lista en SharePoint para confirmarlo.

## 7) Producción
- Configura `NEXTAUTH_URL` con tu dominio.
- Ajusta **Redirect URIs** en Entra ID.
- Usa un secreto fuerte en `NEXTAUTH_SECRET`.
- Despliega en Vercel/Azure Static Web Apps. Asegura variables de entorno.

## 8) Cambiar a Dataverse (opcional)
- Reemplaza `lib/graph.ts` por un cliente a la Web API de Dataverse.
- Scopes: `https://{org}.crm.dynamics.com/.default` con aplicación/confidencial y OBO si usas NextAuth.
- Estructura de páginas y auth se mantiene igual.

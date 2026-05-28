import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">העמוד לא נמצא</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          העמוד שחיפשת אינו קיים או הועבר.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          העמוד לא נטען כראוי
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          משהו השתבש. ניתן לרענן או לחזור לדף הבית.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            נסה שוב
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            דף הבית
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "גל ונג זכוכיות | מקלחונים ועבודות זכוכית בהתאמה אישית" },
      { name: "description", content: "גל ונג זכוכיות - התקנת מקלחונים מזכוכית, עיצוב ועבודות זכוכית בהתאמה אישית. איכות, דיוק ושירות מקצועי. חייגו 050-3763355" },
      { property: "og:title", content: "גל ונג זכוכיות | מקלחונים ועבודות זכוכית בהתאמה אישית" },
      { property: "og:description", content: "גל ונג זכוכיות - התקנת מקלחונים מזכוכית, עיצוב ועבודות זכוכית בהתאמה אישית. איכות, דיוק ושירות מקצועי. חייגו 050-3763355" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "גל ונג זכוכיות | מקלחונים ועבודות זכוכית בהתאמה אישית" },
      { name: "twitter:description", content: "גל ונג זכוכיות - התקנת מקלחונים מזכוכית, עיצוב ועבודות זכוכית בהתאמה אישית. איכות, דיוק ושירות מקצועי. חייגו 050-3763355" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4a6e86c7-fad5-4091-9d3a-9965606feaaa/id-preview-a3de255f--9590b3f6-ee59-4386-8c83-67d602c34a29.lovable.app-1779969167396.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4a6e86c7-fad5-4091-9d3a-9965606feaaa/id-preview-a3de255f--9590b3f6-ee59-4386-8c83-67d602c34a29.lovable.app-1779969167396.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

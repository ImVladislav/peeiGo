import path from "path";
import { fileURLToPath } from "url"; // Імпорт функції для перетворення URL в шлях

import createNextIntlPlugin from "next-intl/plugin";

const __filename = fileURLToPath(import.meta.url); // Отримання шляху до поточного файлу
const __dirname = path.dirname(__filename); // Отримання теки поточного файлу

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // Використання __dirname для побудови шляху
  },
};

export default withNextIntl(nextConfig);

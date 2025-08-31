import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="group bg-card dark:bg-background border border-border dark:border-border hover:bg-muted dark:hover:bg-accent/20 hover:border-muted-foreground/30 dark:hover:border-accent/40 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-all group-hover:text-blue-600 dark:group-hover:text-blue-100" />
      ) : (
        <Sun className="h-5 w-5 transition-all group-hover:text-blue-600 dark:group-hover:text-blue-100" />
      )}
    </Button>
  );
}

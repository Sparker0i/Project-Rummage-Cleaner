# Project Rummage Cleaner

## Development Commands

- **Start development server**: `npm run dev`
- **Build project**: `npm run build` (includes TypeScript compilation)
- **Run linter**: `npm run lint`
- **Preview build**: `npm run preview`

## Project Architecture

This is a React + TypeScript + Vite text cleaning application that removes or replaces unwanted Unicode characters from text input. These Unicode characters are typically used by AI tools to differentiate content created by such tools.

### Core Structure

- **Main App** (`src/App.tsx`): Central state management with React hooks, controls two processing modes (clean/replace), real-time vs manual processing
- **Text Processing Engine** (`src/utils/textCleaner.ts`): Core logic with two modes:
  - `clean`: Removes all problematic characters
  - `replace`: Replaces smart quotes, dashes, ellipsis with ASCII equivalents, then removes invisible/control characters
- **Character Definitions** (`src/constants/characters.ts`): Unicode character mappings including invisible chars, replaceable chars, control characters, and replacement rules

### Component Architecture

**Panel-based UI layout**:
- `TextInputPanel` / `TextOutputPanel`: Input/output text areas with character counts
- `ControlPanel`: Mode toggles, processing controls, view options
- `ComparisonPanel`: Side-by-side diff view (toggleable)
- `StatisticsPanel`: Character frequency breakdown (toggleable)

**Reusable UI components** (`src/components/ui/`): Button, Card, TextArea with Tailwind styling

### Key Features

- **Two Processing Modes**: 
  - Clean mode: Removes all unwanted characters
  - Replace mode: Smart character replacement + removal
- **Real-time Processing**: Automatic cleaning as user types (toggleable)
- **Statistics**: Detailed breakdown of characters found/processed
- **Comparison View**: Visual diff between input and output
- **Clipboard Integration**: Copy/replace functionality via custom hook

### Technology Stack

- React 19 with TypeScript
- Vite build system
- Tailwind CSS 4.x for styling
- Lucide React for icons
- ESLint for code quality
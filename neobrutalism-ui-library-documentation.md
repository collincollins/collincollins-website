NeoBrutalism UI Library Documentation

Table of Contents
	•	Introduction & Installation
	•	Theming & Styling
	•	Component Library
	•	Accordion
	•	Alert Dialog
	•	Alert
	•	Avatar
	•	Badge
	•	Breadcrumb
	•	Button
	•	Calendar
	•	Card
	•	Carousel
	•	Checkbox
	•	Collapsible
	•	Combobox
	•	Command (Command Menu / Palette)
	•	Context Menu
	•	Date Picker
	•	Data Table
	•	Dialog
	•	Drawer
	•	Dropdown Menu
	•	Form
	•	Hover Card
	•	Image Card
	•	Input OTP
	•	Input (Text Field)
	•	Label
	•	Marquee
	•	Menubar
	•	Navigation Menu
	•	Pagination
	•	Popover
	•	Progress
	•	Radio Group
	•	Resizable
	•	Scroll Area
	•	Select
	•	Sheet
	•	Skeleton
	•	Slider
	•	Switch
	•	Table
	•	Tabs
	•	Textarea
	•	Toast
	•	Tooltip
	•	Utilities & Hooks
	•	Class Name Utility (cn)
	•	Toast Hook (useToast)
	•	Best Practices
	•	Troubleshooting & Common Issues

Introduction & Installation

NeoBrutalism UI is a collection of React components styled in the neo-brutalist aesthetic【3†L29-L37】【3†L14-L22】. Neo-brutalism in web design combines raw, unapologetic elements of classic brutalism (thick borders, bold colors, minimal polish) with modern typography and interactivity【3†L31-L39】. This library provides pre-built UI components (many adapted from the popular shadcn/ui library【3†L31-L37】) to help developers quickly build interfaces with a neo-brutalist look and feel. The components emphasize high contrast, flat design, and bold palettes, while still being accessible and usable.

Key Features and Philosophy
	•	Bold Aesthetic: NeoBrutalism UI embraces unconventional design – visible grid lines, primary colors, and deliberate “unpolished” elements【3†L33-L41】. It rejects overly smooth UI conventions in favor of a striking, memorable look.
	•	Based on shadcn/ui: Most components are derived from the shadcn UI library (Radix Primitives + Tailwind) for accessibility and structure【3†L31-L37】. This means under the hood each component follows proven patterns for semantics and keyboard support.
	•	Accessible by Design: Despite the unusual style, components follow accessibility best practices (proper ARIA roles, focus management, etc.). If used as documented, components like dialogs, menus, and forms will be screen-reader friendly and keyboard navigable.
	•	Customization: The library supports extensive customization through Tailwind CSS. You can either use provided CSS variables for theming or utility classes. This allows tweaking colors, fonts, and more to match your brand or preference.
	•	TypeScript Support: Components are built with TypeScript and provide proper prop types/interfaces for a type-safe development experience.
	•	Modern Framework Ready: The components are framework-agnostic React components. They can be used in Next.js, Vite, Create React App, etc., and they are designed to integrate with Tailwind CSS.

Installation

NeoBrutalism UI assumes you have a React project using Tailwind CSS v3 (Tailwind v4 is not yet fully supported【5†L31-L39】). If you’re starting fresh, follow these steps:

1. Initialize Your App
If using Next.js, create a new app (ensuring Tailwind v3 is used):

npx create-next-app@15.1.7

Use the specific 15.1.7 version of the Next.js starter – this ensures Tailwind v3 is set up (the latest may default to Tailwind 4). For other frameworks (CRA, Vite, etc.), set up a project as usual, but make sure to install Tailwind CSS v3 per its documentation【5†L31-L39】【5†L43-L51】.

2. Install and Setup shadcn/ui
Many components are scaffolded via the shadcn UI CLI. Follow the [shadcn UI installation guide】【5†L53-L60】 to add shadcn to your project: this typically means installing the CLI and initializing it (e.g. npx shadcn-ui@latest init). During this setup, when prompted “Use CSS variables for theming?” choose “Yes”【5†L60-L65】. There is a known bug if CSS variables are disabled, so enabling them (even if you plan not to use them directly) avoids installation issues.

Note: The library supports both CSS variable theming and traditional utility classes. Choosing “Yes” to CSS variables in shadcn’s init will not force you to use them exclusively; it just avoids a bug when installing certain components via the CLI【5†L60-L67】.

3. Add NeoBrutalism Styling
Remove any default Tailwind styles from your app (e.g. the default globals). Then add the NeoBrutalism base styles to your Tailwind configuration and CSS. The recommended approach is to use the provided CSS variables (or utility classes, see Theming & Styling below for details). Specifically:
	•	Copy the NeoBrutalism CSS variables into your global CSS (usually globals.css or index.css). This includes color definitions (for light and dark mode), border radius, shadow offsets, etc.【8†L81-L90】【8†L108-L117】.
	•	Update your tailwind.config.js theme to extend Tailwind with these variables. Map Tailwind color names to the CSS variables (main, bg, text, etc.) and include customizations for borderRadius, boxShadow, translate (for the offset shadows), and fontWeight as shown in the documentation【8†L127-L137】【8†L143-L152】.

Example: Tailwind Config Excerpts

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        bg: 'var(--bg)',
        text: 'var(--text)',
        // ... (include overlay, bw, blank, mtext, border, etc. as in docs)
        // 'bw' is white in light and secondary black in dark, etc.
      },
      borderRadius: {
        base: '5px'  // base border radius
      },
      boxShadow: {
        shadow: 'var(--shadow)'  // uses CSS variable for unified shadow style
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',    // body text weight
        heading: '700', // headings weight
      }
    }
  },
  // ... rest of config
}

Including these ensures the Tailwind classes generated (like bg-main, text-text, shadow-shadow, etc.) correspond to the neo-brutalist theme values【8†L129-L139】【8†L147-L155】.

4. Install Components
You can add components individually using the CLI or manually:
	•	Via shadcn CLI: On each component’s documentation page, a command is provided. For example, to add the Button component, run:

pnpm dlx shadcn@latest add https://neobrutalism.dev/r/button.json

(Commands for npm, yarn, bun are also provided in the docs UI.) This fetches the component’s code (with neo-brutalist styles) and adds it to your project under the designated folder (usually components/ui/). Make sure to choose the variant (CSS variables vs. utility classes) matching your styling approach – the registry has separate JSON for each if applicable【6†L86-L94】. In the docs UI, toggle “CSS Variables” or “Utility classes” before copying the CLI command if both are available【15†L37-L45】【15†L39-L47】.

	•	Manual Installation: If a component doesn’t have a CLI command or you prefer manual copying, each doc page shows the full component code. For shadcn-based components, a link to the original shadcn docs is provided【15†L29-L37】. The typical manual steps are: 1) install any Radix or third-party dependencies the component needs (shadcn docs will list them), 2) create the file in your project (e.g. components/ui/slider.tsx), 3) copy the code from the NeoBrutalism docs into that file. Ensure you copy the correct variant (some components offer a CSS-variable-based variant vs a plain “utility classes” variant)【5†L75-L84】. The docs clearly label differences if any. After adding the file, you can import and use the component in your app.

Tailwind v4 Note: The library is built for Tailwind v3. Using Tailwind v4 without adjusting the styling could cause issues. It’s recommended to stick to v3 until an update (a canary release for v4 migration exists, check GitHub issues for progress【5†L33-L37】).

With installation complete, you should have:
	•	NeoBrutalism base styles (CSS variables or utility classes theme) applied.
	•	The desired components copied into your project’s components/ui/ directory.
	•	All required dependencies (Radix packages like @radix-ui/react-dialog for modals, etc., and utilities like class-variance-authority or cmdk if used by certain components). The shadcn CLI usually handles installing Radix packages for you. For manual setup, refer to each component’s import statements to see what to install (e.g. npm install @radix-ui/react-accordion class-variance-authority lucide-react for Accordion and icons).

Now you can import NeoBrutalism UI components in your app code. For example:

import { Button } from '@/components/ui/button'

function MyPage() {
  return <Button variant="default">Click Me</Button>
}

This would render a button with neo-brutalist styles. Next, we’ll explore each component and its API in detail.

Theming & Styling

NeoBrutalism UI offers two primary ways to manage styling and theming across components: CSS Variables and Utility Classes. Both approaches achieve the same visual result, but they differ in how you toggle dark mode and customize values.
	•	CSS Variables Approach: Defines a set of CSS custom properties (variables) for colors, shadows, etc., and uses them in Tailwind classes. This way, one Tailwind class can automatically adapt to light/dark themes by changing the underlying variable.
	•	Utility Classes Approach: Uses explicit Tailwind classes (with dark: prefixes for dark mode) for styling. This results in slightly more verbose class names (since you might need both a light and dark class for the same element).

Choosing an Approach: If you want easier theming and a single source of truth for colors, CSS variables are convenient. If you prefer pure Tailwind without custom CSS or want to fine-tune every class, use utility classes. Importantly, the component code provided in the docs will have variants for each approach (toggle the “CSS Variables / Utility classes” switch in the docs UI to see the differences).

Default Theme Values

By default, the library defines a subtle pastel blue/gray theme (typical neo-brutalist look):
	•	Main Color (--main): A light bluish hue #88aaee (used for primary backgrounds of components)【8†L81-L89】.
	•	Background (--bg): A grayish off-white #dfe5f2 for page background【8†L81-L89】.
	•	Text (--text): Black (or near-black) for light mode text, and light gray for dark mode text【8†L108-L116】.
	•	Border (--border): Black for borders (for that harsh outline)【8†L89-L96】.
	•	BW (--bw): A variable that is white in light mode and a dark gray (#212121) in dark mode【8†L85-L93】. This is used for elements that are “inverted” or need an alternate background.
	•	Overlay (--overlay): rgba(0,0,0,0.8) a translucent black overlay used for modals/dialogs background【8†L81-L89】.
	•	mText (--mtext): Stands for “main text”, typically used for text on elements that have --main as background (like text on a primary button). It’s set to black so that on a light blue button, text is black for contrast【8†L91-L99】.
	•	Ring and Ring Offset: Used for focus outlines (e.g., focused state might show a white ring offset on a black ring for contrast)【8†L91-L99】.
	•	Font Weights: Base font weight 500 (for normal text) and 700 for headings【8†L101-L109】.
	•	Border Radius: 5px (small rounding on corners – neo-brutalism often uses subtle rounding to mimic imperfect corners)【8†L97-L101】.
	•	Shadow Offsets: 4px offset shadows (both x and y) for the drop shadow effect, and corresponding negative offsets for “reverse” shadow on hover【8†L97-L101】.

In light mode, the theme uses light backgrounds with black outlines; in dark mode, it inverts appropriately (dark background, white outlines)【8†L108-L116】. The default dark mode in neo-brutalism is intentionally stark and not heavily tweaked (the author notes dark mode neo-brutalism is challenging to design【9†L164-L172】). You can certainly use dark mode, but the default suggestion is to primarily design for light mode or carefully adjust colors for dark.

Adding the Styles to Your Project

If using CSS Variables (recommended):
	1.	Copy the CSS variables into your global CSS file. The snippet looks like:

:root {
  --main: #88aaee;
  --overlay: rgba(0,0,0,0.8);
  --bg: #dfe5f2;
  --bw: #fff;
  --blank: #000;
  --border: #000;
  --text: #000;
  --mtext: #000;
  --ring: #000;
  --ring-offset: #fff;
  --border-radius: 5px;
  --box-shadow-x: 4px;
  --box-shadow-y: 4px;
  --reverse-box-shadow-x: -4px;
  --reverse-box-shadow-y: -4px;
  --base-font-weight: 500;
  --heading-font-weight: 700;
  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0 0 var(--border);
}
.dark {
  --bg: #272933;
  --bw: #212121;
  --blank: #fff;
  --border: #000;
  --text: #e6e6e6;
  --mtext: #000;
  --ring: #fff;
  --ring-offset: #000;
  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0 0 var(--border);
}

This establishes light and dark mode values. The .dark class (added to your HTML element by a theme toggler or Next.js dark mode strategy) overrides relevant vars for dark mode【8†L108-L116】. You can adjust these values to change the color scheme (for example, use a different --main color to shift the entire accent color).

	2.	Adjust Tailwind config to use these variables (as shown earlier). This step links Tailwind utility classes to the CSS variable values so you can use classes like bg-main, text-mtext, etc. in your markup【8†L127-L136】【8†L143-L151】.

If using Utility Classes approach:
	•	You can skip defining CSS variables. Instead, you would directly use Tailwind classes with dark variants. For example, instead of a single bg-main class, you might use bg-[#fff] dark:bg-[#212121] for an element that should be white in light and dark gray in dark mode (this corresponds to what --bw covers)【7†L85-L93】.
	•	The docs provide the needed classes in comments (the CSS variable definitions show what values to use for the dark variant)【7†L85-L93】. You would incorporate those values in your components or extend Tailwind’s theme with separate darkText, darkBg, etc. if desired.

In practice, using CSS variables is simpler to manage, since toggling dark mode just switches the .dark context. Utility classes might be preferred if you cannot or do not want to use custom CSS at all.

Color Palettes: The documentation site showcases some pre-made color palettes (likely as inspiration)【7†L31-L39】. You can experiment with those by changing --main and other values accordingly. For example, a neon palette or a pastel palette can dramatically change the vibe while keeping the brutalist structure.

Border Radius & Shadows: NeoBrutalism UI uses a consistent small radius (rounded-base class corresponds to 5px by default) and a drop shadow that looks like a thick border (4px offset, black). If you want a more exaggerated effect, you could increase --box-shadow-x/y for a larger “shadow gap”, or set --border-radius to 0 for perfectly sharp corners throughout.

Fonts: The default theme doesn’t enforce a specific font family, but the documentation mentions a list of recommended free fonts for a neo-brutalist feel【9†L169-L177】【12†L31-L39】 (e.g., Public Sans, DM Sans, Archivo, Montserrat, Inter, Work Sans, Red Hat Text). These tend to be grotesque or geometric sans-serifs that pair well with the bold aesthetic. You can include these fonts via Google Fonts and then apply to the font-base (body text) or font-heading classes as needed.

Dark Mode Consideration: The author warns that dark mode neo-brutalism is “hard to make look good” and was somewhat experimental【9†L164-L172】. If you enable dark mode, consider adjusting colors beyond the defaults. For instance, the default --bg dark is a deep gray (#272933) which might make black borders less visible – you might switch borders to white in dark mode or lighten the dark background for contrast. Feel free to tweak the CSS variables to suit your design; the library’s styles will update accordingly.

In summary, setting up theming involves copying the base styles (or classes) and ensuring Tailwind knows about them. After that, all components will automatically use those values. You can always override styles on a per-component basis by passing className to any component (all components accept a className for custom styling), but it’s recommended to adjust theme variables so that the look remains consistent globally.

Component Library

Below is a comprehensive reference for each UI component in NeoBrutalism UI. Each component section includes a description, the import path, available props (and their meaning), code examples for usage, and any relevant notes (accessibility, customization, etc.). Unless otherwise noted, all components are React functional components using forwardRef (so you can attach refs if needed) and accept a className prop to extend or override styles.

Note: Many components wrap Radix UI primitives, meaning they accept all props that Radix component does. For brevity, we list the most commonly used props and variants. Additional low-level props (e.g., event handlers, etc.) can also be passed through to the underlying element.

Accordion

Description: A vertically stacked set of expandable items. Only one item can be expanded at a time (by default), showing its associated content. The Accordion component is great for FAQs or collapsible content sections.

Import:

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'

These components correspond to Radix’s Accordion primitives:
	•	<Accordion>: the container (context provider) for accordion items.
	•	<AccordionItem>: a single collapsible section.
	•	<AccordionTrigger>: the button that toggles an item.
	•	<AccordionContent>: the collapsible panel content for an item.

Props:
	•	Accordion (Root): Accepts props of Radix Accordion Root. Key ones:
	•	type: "single" (default) or "multiple". "single" allows only one item open at a time; "multiple" allows multiple open simultaneously.
	•	collapsible: boolean (default false when type is single). If true, allows closing the currently open item (so all can be collapsed)【50†L175-L183】.
	•	Any other HTML div props (e.g., className for custom width, etc.).
	•	AccordionItem:
	•	value: string (required). An identifier for the item (used internally to track open state).
	•	Any div props for the item container.
	•	AccordionTrigger:
	•	As this is a button element under the hood, it accepts standard button props (disabled, etc.) and children for the trigger label. It should be placed inside an AccordionItem.
	•	AccordionContent:
	•	Children for the content. It’s essentially a div that will show/hide. Accepts standard HTML div props.

There are no special variant props (all styling is fixed via classes). The styling applied:
	•	AccordionItem has a base of rounded-base overflow-x-hidden border-2 border-b border-border shadow-shadow giving each item a bottom-border and drop-shadow outline【48†L75-L83】.
	•	AccordionTrigger is styled to have a background bg-main, border on the bottom, padding, and an icon rotation on open (there’s a ChevronDown icon appended via CSS that rotates)【48†L107-L114】.
	•	AccordionContent has default padding (p-4) for the content area【50†L151-L159】.

Usage Example:

<Accordion className="w-full max-w-md" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default neo-brutalist styles (thick borders, etc.).
    </AccordionContent>
  </AccordionItem>
</Accordion>

In this example, we allow collapsing (so if “Is it accessible?” is open, clicking it again will collapse it). Only one item can be open at a time due to type="single". Each AccordionTrigger is rendered as a header that can be clicked to show its associated content【50†L177-L185】【50†L181-L189】.

Notes:
	•	Accessibility: The AccordionTrigger elements have proper ARIA attributes applied by Radix (like aria-expanded) and manage focus. Ensure your trigger text clearly indicates the section it controls.
	•	You can include icons or additional text inside triggers if needed. For example, one could place a [+]/[-] icon or the ChevronDown (as done by default via CSS) to indicate state.
	•	To style different states (hover, open, etc.), you may override classes. For instance, data-[state=open] is applied to an open trigger, so you could target .accordion-trigger[data-state="open"] { ... } in CSS or add a class via className prop conditionally if needed.
	•	AccordionContent mounts and unmounts by default when opened/closed. If you have expensive content to render, this is fine. If you want to keep content in DOM, Radix allows forceMount prop on AccordionContent.
	•	The default icon (chevron) that rotates is part of the component via an embedded SVG (Lucide’s ChevronDown). It appears automatically thanks to &[data-state=open]>svg CSS rules【48†L107-L114】. If you want to replace it, you could manually put an icon inside AccordionTrigger children and add your own CSS.

Alert Dialog

Description: A modal dialog that interrupts the user with a critical message or confirmation request. The Alert Dialog is typically used for actions like “Are you sure you want to delete? – Cancel/Confirm”. It is similar to a regular Dialog but with specific roles and focus handling for urgent interactions.

Import:

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog'

These correspond to Radix AlertDialog primitives:
	•	<AlertDialog>: root context component.
	•	<AlertDialogTrigger>: element that, when clicked, opens the alert dialog.
	•	<AlertDialogContent>: the content box of the modal.
	•	<AlertDialogTitle> and <AlertDialogDescription>: heading and descriptive text inside the content.
	•	<AlertDialogHeader> and <AlertDialogFooter>: layout components for content organization (optional, just for styling grouping).
	•	<AlertDialogCancel>: a button for the cancel action.
	•	<AlertDialogAction>: a button for the confirm action (often “Ok” or “Continue”).

Props:
	•	AlertDialog (Root): No special props needed in usage; it can accept an open boolean and onOpenChange if you want to control it programmatically, but typically it’s used unmanaged.
	•	AlertDialogTrigger: Usually rendered as a child (often with asChild) wrapping a Button. Accepts any element that can be clicked (<button> or others if using asChild) to serve as the trigger.
	•	AlertDialogContent:
	•	Appears as a modal centered overlay. It accepts standard div props like className.
	•	The styling includes a fixed position center, overlay, etc. (The library applies bg-main, thick border, padding, etc. to the content panel).
	•	AlertDialogTitle: Usually an <h2> or <h3> styled element. No unique props; pass children (string or nodes) for the title text.
	•	AlertDialogDescription: A <p> styled for additional info. Pass children for the message text.
	•	AlertDialogCancel & AlertDialogAction:
	•	These are rendered as buttons (they internally use the Button component styles via buttonVariants for consistency【24†L53-L61】).
	•	They accept all <button> props plus asChild if you want to wrap a custom button element.
	•	When clicked, they will close the dialog. The Action is typically the affirmative action, Cancel is the dismissive.
	•	You can also listen to onClick on them for custom logic (e.g., performing the destructive action on confirm).

Usage Example:

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="default">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

In this snippet, clicking the “Delete Account” button opens a modal. The modal displays a title and description explaining the consequence. The footer has two buttons: “Cancel” which closes the dialog without action, and “Continue” which, when clicked, would proceed with deletion (you would handle the actual deletion logic in a parent on the onOpenChange or wrapping context). By default, AlertDialogAction is styled as a primary button and Cancel as a neutral button (inherit styles from Button component)【26†L364-L372】【26†L366-L374】.

Notes:
	•	Accessibility: The AlertDialog uses role="alertdialog" and traps focus when open. It also typically applies aria-modal="true" on content and focuses the firselement inside (usually the Cancel button). Ensure every AlertDialog has a Title and Description for context. These are wired to aria-labelledby and aria-describedby automatically by Radix.
	•	Only one AlertDialogContent should be open at a time. Nesting them is not typical.
	•	Customization: If you want a custom layout, you don’t have to use AlertDialogHeader/Footer – they are just layout helpers (divs with certain spacing). You can structure the content freely, but using them ensures consistent spacing (the library sets header as flex column with spacing, footer as flex row right-aligned)【26†L350-L358】【26†L364-L372】.
	•	The default overlay is a semi-opaque overlay (bg-overlay which is a black ~80% opacity backdrop) that fades in/out【24†L79-L87】. The content has an animation for scale/fade as well. These animations are built-in via Radix data-state classes.
	•	Pressing Escape will close the dialog by default (Radix handles this). Clicking outside will also close it, unless you intercept via AlertDialogPortal props. Since it’s an alert, consider disabling outside click close if the action is critical. (Radix AlertDialog by default does allow outside click to close as a cancel action).
	•	You can place AlertDialog at root of your app (e.g., a global confirmation modal) or inline in component. Both work since Radix uses portals. If placed deep, remember the trigger and content don’t have to be siblings in DOM due to portal (the content will render at root).

Alert

Description: A visual alert box used to highlight important information, such as success messages, warnings, or error notifications within the page. It’s a non-modal component (unlike AlertDialog), meant to be embedded in a layout. The Alert component includes a title and description, and you can optionally prepend an icon.

Import:

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

Props:
	•	Alert: This is a container (<div role="alert">) with stylized borders and background. It accepts:
	•	variant: "default" (the standard alert with colored background) or "destructive" (for error alerts)【44†L73-L81】. The default variant has bg-main (blue background with black text), the destructive variant has bg-black text-white for a high-contrast error style【44†L73-L81】.
	•	className: override or extend styling (applied to the outer div).
	•	Other HTML <div> props (e.g., id).
	•	AlertTitle: A subcomponent for the alert’s heading. It’s rendered as an <h5> (by default) with some margin-bottom and bold font【44†L125-L133】. Accepts className and any HTML heading props (though semantically you might keep it as a small heading).
	•	AlertDescription: A subcomponent for additional content of the alert. It’s a <div> that can contain text or other elements (often used to wrap one or more paragraphs of description). It has utility classes for slightly smaller font and relaxed line height【44†L147-L155】. Accepts className and div props.

Usage Example:

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

<Alert variant="default">
  <Terminal className="h-4 w-4" /> 
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the CLI.
  </AlertDescription>
</Alert>

<Alert variant="destructive" className="mt-4">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>

In the first Alert, we included a Lucide icon (Terminal) before the title to illustrate an alert icon usage. The Alert component’s internal CSS is set up so that if an SVG (icon) is the first child, it will position appropriately (it uses a selector to give padding-left to content when an SVG is present【44†L65-L73】 and position the icon absolute in the top-left with some offset). The second Alert uses the destructive variant to show an error style (black background, white text)【44†L75-L79】.

Notes:
	•	The Alert component is essentially just a styled container; it doesn’t auto-dismiss or overlay. If you need a timed dismiss, you could wrap it in a parent that removes it after some time, or consider using Toast for transient messages.
	•	Styling details: The container has relative positioning and padding (p-4), with a thick border (border-2 border-border) and drop shadow by default【44†L65-L73】. It also has some clever CSS: &>svg is absolutely positioned to the left inside, and it adds left padding to the content so text doesn’t overlap the icon【44†L65-L73】. The inset variant (if any) would indent content (not applicable here).
	•	You can include interactive elements (links, buttons) inside AlertDescription if the alert provides guidance or actions (“… Fix in settings”). Ensure that any such link is also styled or distinguished (by default it will just be underlined as normal).
	•	If no AlertTitle is provided, you can still use the Alert just with content, but including a title in bold is recommended for clarity.
	•	Accessibility: role="alert" on the container will announce the content immediately to screen readers when it appears, which is good for dynamic alerts on actions. If you are server-rendering a static alert, it’s still fine. The AlertTitle is not separately announced as a heading; it’s just part of the alert content.

Avatar

Description: A circular avatar image component with a fallback. It displays a user profile picture or any image in a circle frame, with an optional text fallback (like initials) if the image fails to load or is not provided.

Import:

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

Props:
	•	Avatar: The wrapper component (essentially a <span> or <div> that holds the image and fallback). It takes:
	•	Any HTML div props such as className. By default it applies a fixed size (default 40px by 40px, via h-10 w-10) and rounded-full to make it circular【53†L71-L79】. It also has overflow-hidden so the image doesn’t spill out, and a black outline border via outline classes (outline-2 outline-border) giving it a neo-brutalist border even for round images【53†L71-L79】.
	•	It does not itself take a src or alt – those go on AvatarImage.
	•	AvatarImage: This renders the acProps:
	•	src: string URL of the image.
	•	alt: string alt text for the image (provide for accessibility).
	•	It forwards other <img> props as well (e.g., ref, onError if needed).
	•	By default it’s styled to fill the parent (aspect-square h-full w-full) so it will conform to the Avatar’s size【53†L97-L105】.
	•	AvatarFallback: A fallback content that shows when the image is not available. Typically, this is a short text like initials (“SB” in the docs example)【55†L149-L157】. Props:
	•	Accepts children (text or icon).
	•	You can style it via className – by default it might inherit some styling from the Avatar container (for example, you might want to center the text vertically/horizontally).

Usage Example:

<Avatar>
  <AvatarImage src="https://github.com/ekmas.png" alt="Profile picture of Ekmas" />
  <AvatarFallback>SB</AvatarFallback>
</Avatar>

In this example, the Avatar will attempt to load the image from the URL. If it loads, it will be shown. If it fails (or while it’s loading), the text “SB” will be displayed instead (perhaps repreer’s initials). The avatar is circular and has a black outline around it by default【53†L71-L79】.

Notes:
	•	If you need a different size avatar, you can override the classes on Avatar (e.g., className="h-16 w-16" for a 64px avatar). The inner image will automatically scale to fit.
	•	The outline around the avatar gives it a boxy look even though the image is round (because CSS outline doesn’t follow border-radius). This is an intentional neo-brutalist touch – a white square outline on a round image. If you prefer the outline to also be circular, you could use border instead of outline (but border affects layout). The default uses outline so that the thick border doesn’t alter element size.
	•	Ensure the Avatar has either an image or a fallback at all times for best appearance. If you leave out AvatarFallback and the image fails, you  empty circle.
	•	You can put any JSX in AvatarFallback (like an icon or even a colored background with a letter). It inherits the Avatar’s sizing and shape.
	•	The component uses Radix’s Avatar primitive behind the scenes (or a similar approach), which handles fallback display logic (Radix will hide AvatarImage if it fails and show fallbackin code here, it’s straightforward: just include both and Radix handles toggling. Make sure to include both in the JSX as above.
	•	Accessibility: Always provide an alt for AvatarImage. If the image is purely decorative and you have a user name next to it, you might use alt="" to mark it as decorative. AvatarFallback content will be read by screen readers as normal content if image is missing; you may consider adding aria-hidden to the fallback text if it’s redundant (e.g., if you already have the user’s name visible elsewhere).

Badge

Description: A smalt for labeling or categorizing items. Ba used to display statuses or counts (e.g., “New”, “Featured”, etc.). In NeoBrutalism UI, badges have a bold outline and background.

Import:

import { Badge } from '@/components/ui/badge'

Props:
	•	Badge:
	•	variant: "default" or "neutral"【57†L69-L77】. Default variant uses the main color background (bg-main text-mtext – e.g., blue background with black text)【57†L69-L77】. The neutral variant uses a neutral background (bg-bw text-text – which resolves to white background, black text in light mode)【57†L71-L73】. Use neutral for less accentuated badges.
	•	Other props: It extends React.HTMLAttributes<HTMLDivElement> so you can pass children (badge label text or icons) and className.
	•	There is no size prop; the size is determined by padding and text size (which are fixed: text-xs small text, and paddings x2.5 horizontally, y0.5 vertically)【57†L61-L69】.

Usage Example:

<Badge>Default</Badge>
<Badge variant="neutral" className="ml-2">Neutral</Badge>

This will render two badges: one with default styling (colored background) labeled “Default”, and one with a neutral white/gray background labeled “Neutral”. By default, badges have rounded corners and a border:
	•	They are inline-flex elements, so they fit in text or can be within buttons, etc.
	•	Padding makes them pill-shaped.
	•	The text is tiny (xs) and uses font-base (500 weight).
	•	They have a fong (focus outline) for accessibility【57†L61-L69】.

Notes:
	•	Badges are often used inside other components (like inside a button or next to headings). The component is a simple <div> so if used inline with text, you might want to wrap it or adjust CSS to center vertically.
	•	If using within a button or other interactive element, consider whether it should be clickable or not. Typically, badges are non-interactive (just indicators).
	•	The className can be used to change color completely if needed (though in that case, you might not use the variant prop). For instance, <Badge className="bg-green-500 text-white">Success</Badge> would override to a green badge.
	•	The badge’s border is always black (border-border which is black in light mode and black in dark by default since border var is black in both)【57†L59-L67】. Neutral variant uses bg-bw which becomes dark gray in dark mode, maintaining contrast with the border.
	•	Since badges use inline-flex, multiple badges in a line will have a small gap by default (space between inline elements). You can wrap them or use margin (like the ml-2 in example) to control spacing.
	•	Accessibility: No special role – it’s a <div> by default. If the badge conveys status, you might add role="status" or aria-label if needed for screen readers. But often, badges are supplementary text and thus are read as part of the normal flow.

Breadcrumb

Description: A breadcrumb navigation component that displays the page’s location within a site’s hierarchy. It typically appears as a series of links separated by a separator (like / or >). The NeoBrutalism Breadcrumb provides subcomponents to assemble a flexible breadcrumb trail.

Import:

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbEllipsis
} from '@/components/ui/breadcrumb'

Structure: The breadcrumb is composed of several parts:
	•	Breadcrumb: The outer navigation wrapper (renders a <nav aria-label="breadcrumb"> element)【61†L69-L72】. It’s mostly for semantics and doesn’t add styling itself.
	•	BreadcrumbList: An ordered list (<ol>) container inside the nav that holds items【61†L84-L92】. It is styled as flex row with gaps.
	•	BreadcrumbItem: A list item (<li>) representing each step in the path【61†L105-L107】. Typically contains either a BreadcrumbLink or BreadcrumbPage.
	•	BreadcrumbLink: An anchor (<a>) styled as a breadcrumb link. Use this for all steps that are clickable (not the current page).
	•	BreadcrumbPage: A span (or similar) that indicates the current page (the last crumb, not clickable).
	•	BreadcrumbSeparator: A divider element (like / or >). By default, the component likely renders an icon or symbol (in code, it uses ChevronRight from lucide as default separator between links【61†L53-L61】). BreadcrumbSeparator can be placed between items.
	•	BreadcrumbEllipsis: A component to indicate collapsed breadcrumbs (e.g., ... if you have many levels and want to truncate). When present, it could be used to condense multiple items.

Props & Usage:
	•	Breadcrumb: Accepts HTML nav props (like className if you want to add margin). It also has a special prop separator?: React.ReactNode which if provided, can override the default separator icon in internal logic【61†L65-L73】. Usually, you won’t pass chy to Breadcrumb; you’ll nest BreadcrumbList inside.
	•	BreadcrumbList: Accepts <ol> attributes. You might set a custom class to adjust spacing. By default it has classes to flex-wrap and gap between items【61†L88-L96】.
	•	BreadcrumbItem: Just a <li>, no special props. Ensures proper list semantics.
	•	BreadcrumbLink: Same props as <a> (provide href, possibly onClick etc.). It’s styled with underline or color like a link, or could be plain. ClassName can adjust styling.
	•	BreadcrumbPage: A span (non-link). No special props, just children for the label.
	•	BreadcrumbSeparator: Likely a simple visual separator. By default, if you use BreadcrumbSeparator without children, it might render a default icon (Chevron). You can also provide custom content inside (like <BreadcrumbSeparator>/</BreadcrumbSeparator> to use a slash).
	•	BreadcrumbEllipsis: If you have lots of crumbs, you can insert <BreadcrumbEllipsis /> in the list to indicate skipped items. It probably renders something like an ellipsis character or icon. (In code, it’s likely configured to show a “…”). You might give it a title or tooltip via children if needed.

Usage Example:

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

This would render: Home / Components / Breadcrumb, where “Home” and “Components” are clickable links, and “Breadcrumb” is the current page text【64†L275-L283】【64†L285-L293】. The separators in between are the default chevron icons (pointing right) as provided by BreadcrumbSeparator.

Notes:
	•	The Breadcrumb component is very flexible; it doesn’t impose a specific separator character because you can supply anything (the default is a chevron icon from Lucide).
	•	On small screens, the list is set to wrap if needed, and break long words (using break-words) to avoid overflow【61†L88-L96】.
	•	If you have more levels than you want to display, you can do something like: Home / … / Parent / Current. For the “…” part, you could use BreadcrumbEllipsis. E.g.:

<BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
<BreadcrumbSeparator />

This would show an ellipsis (perhaps styled or clickable if you wanted to reveal a menu).

	•	Styling: Each link and page text is small (text-sm). The BreadcrumbLink likely has default styling to appear as a regular link (maybe underlined or just blue text). BreadcrumbPage might simply appear as plain text (possibly semi-bold to indicate current page).
	•	Icons: The component imports ChevronRight and MoreHorizontal (for ellipsis) icons from lucide【61†L53-L61】. MoreHorizontal likely used by BreadcrumbEllipsis to render three dots icon. Circle and Check might not be directly relevant here (perhaps copy-paste artifact).
	•	You can change the separator globally by passing a custom separator node to Breadcrumb, which if present might cause it to automatically insert that between items instead of requiring explicit <BreadcrumbSeparator />. However, in the usage given by docs, they manually include BreadcrumbSeparator in the JSX【64†L279-L287】【64†L281-L289】. So manual control is used.
	•	Accessibility: The nav has aria-label="breadcrumb", and the list is an ordered list. That’s proper semantic. Use BreadcrumbLink for links (which are focusable). BreadcrumbPage (current page) could have aria-current="page" applied internally for screen readers to know it’s the current page (likely they do so). If not, you should add aria-current to the <BreadcrumbPage> or the <span> inside it.
	•	Because BreadcrumbList is an <ol>, you should only put <li> inside (BreadcrumbItem ensures that). Do not put separators outside of <li>. In the example above, they included separator as sibling of items inside the ol, which is a bit unconventional in pure HTML, but likely BreadcrumbSeparator may render as a special marker or be absolutely positioned. However, in the code above from docs, <BreadcrumbSeparator /> is placed as a direct child of <BreadcrumbList> outside of <BreadcrumbItem>, which breaks semantic structure (should ideally be inside list items or via CSS). The provided usage does that though【64†L277-L285】【64†L279-L287】. Possibly their implementation handles it (or they chose to accept that approach). For better semantics, consider including the separator visually via CSS or inside a list item with an aria-hidden="true" so screen readers skip it.
	•	Typically, only the current page is not a link; all ancestors are links. That pattern is followed in the example (Breadcrumb is current, others are links).

Button

Description: A versatile button component with multiple variants and sizes. It wraps an HTML <button> (or can render as an <a> or custom component via asChild) with consistent neo-brutalist styling: thick border, background, and drop-shadow that moves on hover.

Import:

import { Button } from '@/components/ui/button'

Props: The Button component extends React.ButtonHTMLAttributes<HTMLButtonElement> so it includes all standard button props (type, disabled, onClick, etc.), and also supports some variant props via class-variance-authority:
	•	variant: The visual style of the button.
	•	"default": The primary style – blue background (bg-main), black border, with a drop shadow. On hover, the shadow is removed and the button “shifts” (using translate) to create an illusion of lifting off the page【15†L73-L81】.
	•	"noShadow": A variant with no shadow and no hover translate effect – essentially a flat style (blue background, black border, but no 3D effect)【15†L75-L78】.
	•	"neutral": A neutral style – uses bg-bw (white in light mode) with black text and border, plus drop shadow【15†L80-L87】. This looks like a secondary button.
	•	"reverse": A variant where the hover effect translates in the opposite direction, making the shadow appear on opposite sides on hover【15†L85-L88】. This gives a “pressed-in” effect instead of lifting.
	•	The default variant is "default" if none provided.
	•	size: Control the padding and height of the button.
	•	"default": Standard height (h-10, ~40px) with padding x4 (16px) and py-2 (8px)【16†L92-L100】.
	•	"sm": Small – height 36px (h-9) and smaller horizontal padding (px-3)【16†L92-L100】.
	•	"lg": Large – height 44px (h-11) and larger padding (px-8)【16†L92-L100】.
	•	"icon": Square – height and width 40px (h-10 w-10), intended for icon-only buttons【16†L96-L100】.
	•	Default size is "default".
	•	asChild: boolean (default false). If true, the Button will not render a <button> but instead expects you to wrap another component inside Button, and it will forward the styling to that component (using Radix Slot). E.g. <Button asChild><a href="/learn">Link</a></Button> will render an <a> with button styles. Use this to turn a button into a link or any other element easily.
	•	className: as usual, to add custom Tailwind classes or override some styles.

Styling behavior: All Buttons have:
	•	inline-flex items-center justify-center for horizontal alignment.
	•	whitespace-nowrap to avoid breaking text.
	•	rounded-base for slightly rounded corners.
	•	text-sm font-base for text size and weight.
	•	ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 for focus outline (when focused, a black ring appears just outside with a white offset, creating a stark focus indicator on dark backgrounds)【15†L61-L69】.
	•	disabled:pointer-events-none disabled:opacity-50 for disabled state (non-interactive and semi-transparent).
	•	Space for an icon is accounted for via gap-2 and a selector that makes child SVGs pointer-events-none (so clicks on icon still trigger button) and a fixed size (size-4 which is 1rem or 16px) for icons inside, and shrink-0 so icons don’t collapse【15†L61-L69】.

Variants classes:
	•	Default: text-mtext (text color that contrasts with main background, mtext is black on light blue), bg-main, border-2 border-border, shadow-shadow (the drop shadow), and on hover it adds translate-x-boxShadowX translate-y-boxShadowY and removes shadow (hover:shadow-none)【15†L73-L81】. This means on hover, the button moves 4px right and 4px down (like the shadow offset) and the shadow disappears, giving impression the button has moved “into” the shadow.
	•	NoShadow: text-mtext bg-main border-2 border-border but no shadow ever【15†L75-L78】. (Simpler appearance, no hover translation defined besides default? Actually in code it has no extra hover classes, so it will just maybe darken on hover if any default styling from main? But currently, it likely just stays put, with no additional effect).
	•	Neutral: bg-bw text-text border-2 border-border shadow-shadow and the same hover translate and shadow removal as default【15†L79-L87】. So it looks like a white (or dark gray in dark mode) button with black text that also has a drop shadow until hovered.
	•	Reverse: text-mtext bg-main border-2 border-border but on hover it adds the shadow (instead of removing) by translating in reverse direction: hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow【15†L85-L88】. In normal state, presumably it might not have a shadow? Actually in code, reverse variant adds the hover translations and hover:shadow-shadow, but I suspect in static state it likely has no shadow (though the code snippet for reverse didn’t explicitly say no shadow in default state, but presumably shadow-none default). So effectively, Reverse appears like a flat button until you hover, then it drops shadow on opposite side, giving the inverse animation.

Usage Examples:

<Button>Default</Button>
<Button variant="noShadow">No Shadow</Button>
<Button variant="neutral">Neutral</Button>
<Button variant="reverse">Reverse Hover</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Settings"><SettingsIcon /></Button>

<Button asChild>
  <a href="/learn">Link Button</a>
</Button>

These examples show the various variants and sizes:
	•	The first four demonstrate the visual variants. Hover over each to see the different behaviors (Default and Neutral will sink, Reverse will pop out shadow).
	•	The next line demonstrates size differences.
	•	The icon size button uses an icon (ensure to include an aria-label since no text).
	•	The last demonstrates using asChild to render a styled link instead of a <button>.

Notes:
	•	The Button will by default be a <button type="button">. If you need a submit button in a form, either set type="submit" or use it inside a form where it will default to submit (if no type given, default is submit in forms).
	•	If you use asChild to wrap an anchor, you should manage keyboard accessibility as needed (the anchor is natively focusable).
	•	Avoid putting block-level elements inside Button when asChild is false (the library expects either text or inline elements like icons).
	•	You can combine variant and size: e.g. <Button variant="neutral" size="lg">Large Neutral</Button>.
	•	The cn utility is used internally to merge your className with the variant classes【16†L131-L139】, so you can override things. For instance, <Button className="shadow-none"> would remove the shadow even if variant default tries to add it.
	•	If you include an icon alongside text manually, ensure to give it a class to match sizing. The component already does & > svg { width: 1rem; } via [&_svg]:size-4 so most likely your icon will automatically size to 16px. That may be small; you can override by styling the icon differently or wrapping in a span.
	•	Accessibility: Buttons have keyboard focus ring (the black outline) for visibility. The disabled prop will disable clicks properly via pointer-events-none and opacity. Disabled buttons won’t get focus either.
	•	The library uses forwardRef on Button so you can get a ref to the underlying element if needed.
	•	“Reverse” variant might be used when you want an alternative hover effect (it’s less common but provided for a playful inverted interaction). Use it sparingly for special cases or per design.
	•	The Button is one of the core components used by other components (e.g. AlertDialogAction internally uses Button styles, etc.), ensuring consistency.

Calendar

Description: A calendar/date grid component, primarily used as part of a Date Picker but can be used standalone to display or pick a date. It’s built on top of react-day-picker for the calendar logic and rendering. The Calendar component provides a styled monthly calendar view with navigation controls.

Import:

import { Calendar } from '@/components/ui/calendar'

Props:
	•	Calendar: It is a wrapper around the DayPicker component from react-day-picker. It accepts all props that DayPicker would (CalendarProps is exported as React.ComponentProps<typeof DayPicker>【40†L71-L79】). Key props include:
	•	mode: e.g., "single" for single date selection, "multiple" for selecting multiple dates, or "range" for a range selection. (Often you’ll use "single" in a Date Picker).
	•	selected: the controlled selected date(s).
	•	defaultSelected: initial selected date(s) for uncontrolled usage.
	•	onSelect: callback when date is selected (the library uses this in Date Picker to lift state).
	•	showOutsideDays: boolean (default true in this component) which shows trailing/leading days from adjacent months in the grid【40†L77-L85】.
	•	classNames: an object to override internal classNames of DayPicker elements. The NeoBrutalism Calendar uses this to inject Tailwind classes into the DayPicker subcomponents (like navigation buttons, day cells, etc.)【40†L99-L107】【40†L109-L117】.
	•	...props: any other DayPicker props (e.g., fromMonth, toDate, etc. to constrain dates).

The component already sets up some classNames:
	•	months, month, caption, caption_label, nav, nav_button, etc., giving them Tailwind styles (see code)【40†L99-L107】【40†L112-L120】:
	•	Navigation buttons use the buttonVariants({ variant: "noShadow" }) style, small size, with transparent background and specific sizing【40†L113-L120】.
	•	Overall, the calendar has bg-main text-mtext border border-border shadow-shadow on the main container, making it a box with a drop shadow outline【40†L91-L99】.
	•	The Calendar has built-in prev/next month buttons (using lucide-react icons ChevronLeft/Right).
	•	It also likely supports multiple months view if DayPicker props are set (e.g., numberOfMonths).

Usage Example:

const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>

This renders a Calendar allowing a single date selection. The date state holds the selected date. Clicking a day will update the state via onSelect, thanks to react-day-picker’s behavior【42†L189-L197】. The calendar displays the current month (default) with navigation to previous/next months.

You can customize it further:

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  fromMonth={new Date(2020, 0)}  // earliest month shown Jan 2020
  toDate={new Date()}           // latest selectable date is today
/>

This would limit selection and navigation.

Notes:
	•	The Calendar on its own does not pop up or overlay anything; it’s meant to be embedded (often inside a Popover for a DatePicker). The library’s Date Picker component uses Calendar internally.
	•	If you want to mark special days or add content to cells, react-day-picker allows customization via modifiers and renderDay etc., but those would need passing through props.
	•	The styling ensures the calendar matches the neo-brutalist theme: Each day cell likely has classes to show a black text on main background, the selected day might invert colors, etc. (We see classes for .today and selection in the original DayPicker usage if any, but not in snippet; possibly the default react-day-picker style for selected uses aria-selected which you might need custom CSS).
	•	The navigation buttons are styled as small, noShadow variant buttons – they appear at top corners of the calendar (the code positions them via absolute classes: previous button left-1 and next button right-1 presumably)【40†L114-L122】.
	•	The Calendar component is probably designed to always fill its container width. By default, they gave it w-full in DayPicker’s table, etc.
	•	If multiple months are displayed (not sure if configured), the code uses flex for .months and adjustments.
	•	Since this uses react-day-picker, ensure that library is installed. The CLI or docs likely instruct to install it (and date-fns for formatting if needed).
	•	Accessibility: DayPicker handles roles/grid, focus movement with arrow keys, etc., so the calendar is accessible for keyboard navigation. The left/right chevrons are focusable buttons for navigation. The initialFocus prop (as seen in Date Picker usage) can be passed to focus the calendar when opened【99†L189-L197】.
	•	Use the onSelect prop to retrieve user selection. The component’s selected prop should be controlled for consistent behavior (or use defaultSelected for uncontrolled).
	•	If mode="range" or "multiple", the selected will be an array or range object. The CalendarProps covers those generics.

Card

Description: A container for grouping related content, with an optional header, footer, etc. The Card component in NeoBrutalism UI provides a bordered, shadowed box useful for grouping forms, texts, or interactive content.

Import:

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'

Props:
	•	Card: This is the outer container (a <div>). It has a default styling of a colored panel: rounded-base shadow-shadow border-2 border-border bg-main text-mtext【67†L75-L83】, which is a main-color background with dark text and a drop shadow outline. It accepts:
	•	Standard div props: className, etc.
	•	CardHeader: A layout component (div) for the top of the card. It is structured as a flex column with spacing【67†L100-L108】. Use it to wrap CardTitle and CardDescription (or any heading content).
	•	CardTitle: A component for the card’s title. It’s rendered as a <div> (could be considered an <h3> semantically) with larger font perhaps. Actually in code, it was a <div> used for heading text with some classes for spacing. The snippet shows it might just have margin-bottom and tracking-tight styling【67†L114-L122】.
	•	CardDescription: A component for supporting text in the header. Possibly rendered as another <div> or <p> with smaller font and lighter color. (In code, likely font-base).
	•	CardContent: A container for the main content of the card (div with padding)【67†L100-L108】. Use this to put forms, text, etc.
	•	CardFooter: A container for bottom-aligned actions or summary (div flex row, space-between if needed)【68†L19-L25】. Good for buttons row at the bottom.

All these subcomponents accept className to adjust spacing or layout if needed, but they mostly exist for consistent structure:
	•	CardHeader: default padding of 24px (p-6) and vertical spacing for elements.
	•	CardContent: default padding of 0? Actually in usage they manually put a form with its own padding, but CardContent itself might not add padding except possibly p-6 as well. In snippet it shows CardContent usage wrapping form content without extra classes – likely no default padding to allow flexible content.
	•	CardFooter: default classes flex justify-between with some spacing if needed (in code they added className in usage for grid layout, so by default it’s a simple container that you can customize).

Usage Example:

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="framework">Framework</Label>
          <Select>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="sveltekit">SvelteKit</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
              <SelectItem value="nuxt">Nuxt.js</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="noShadow">Cancel</Button>
    <Button variant="neutral">Deploy</Button>
  </CardFooter>
</Card>

This example (adapted from the docs【69†L243-L252】【69†L299-L307】) shows a Card used as a form container:
	•	The header has a title and description.
	•	The content contains a simple form (with a Name field and a Framework dropdown).
	•	The footer contains two buttons aligned side by side.

The Card has a fixed width of 350px in this example for demo, but you can make it responsive or full width (w-full) as needed.

Notes:
	•	The Card background is the main color (bg-main) with text-mtext for text, meaning by default it has that bluish background. If you want a neutral card (white background), you can override class: e.g., <Card className="bg-bw text-text"> to use white background with black text, or simply override bg-white etc. The border will remain black by default due to border-border.
	•	The drop shadow (shadow-shadow) is that neo-brutalist shadow (4px offset black). It gives a nice lifted look. There’s no hover effect built into Card, but you could make it interactive if you wanted by adding classes on hover (like how Button does). Typically, Card is static.
	•	You can omit subcomponents you don’t need. For instance, a simple card might just use <Card><CardContent>...content...</CardContent></Card> and no header/footer.
	•	If using Card purely for layout (non-semantic), it’s fine. But if it groups information as a section, consider if you need an aria role or landmark – likely not; Card is just a div.
	•	CardFooter in docs is by default flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2【103†L189-L197】, which stacks buttons on mobile and aligns right on desktop. However, in usage they overrode with flex justify-between for their needs【110†L313-L321】. So you can customize layout by passing a different class.
	•	The Card component doesn’t force a specific height. If you put it inside a flex container, it can expand. Otherwise it height wraps content.
	•	For image cards, you might put an <img> inside CardContent or as a background. The library also provides an Image Card component separately for specialized image display (see Image Card section).
	•	Nesting Card: possible but usually not needed. If you do, just be cautious of double shadows.
	•	The CardTitle/Description are not required, but using them ensures proper spacing: CardTitle has bottom margin, CardDescription has appropriate text styling (maybe gray or smaller).
	•	Accessibility: Since CardTitle is a <div> with heading styling, if this card contains important section content, you may want to render it as a heading tag (h2/h3) for semantics. You could either change the component to an <hX> by editing the code or by wrapping Card in a section with an aria-label. Up to your context. Out of the box, it’s just visual.

Carousel

Description: A horizontally (or vertically) scrollable carousel component for displaying a series of items (like images or cards). It includes navigation controls (Previous/Next buttons) and supports draggable/swipe interactions. The NeoBrutalism Carousel is built on the Embla Carousel (via embla-carousel-react) under the hood【71†L59-L67】【71†L125-L133】, providing fluid scrolling.

Import:

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'

(There is also a context hook useCarousel internally, but typically you just use the components above in composition.)

Props:
	•	Carousel (Root): This is the main container that initializes the Embla carousel. It accepts:
	•	orientation: "horizontal" (default) or "vertical"【71†L85-L93】. Controls scroll direction.
	•	opts: An options object for Embla (type EmblaOptionsType). For example, { loop: true } to enable continuous looping.
	•	plugins: An array of Embla plugins if you want to extend functionality (like adding parallax, etc.).
	•	setApi: A callback that receives the Embla API when ready. You can use this to control the carousel externally (e.g., for syncing, or programmatic scroll)【71†L87-L95】.
	•	Any HTML div props (like className to set width/height).
	•	CarouselContent: A container for the scrollable area (wraps all CarouselItem). It’s analogous to Embla’s viewport. Likely just a <div> with overflow hidden and flex. Accepts className and div props.
	•	CarouselItem: Represents each slide item. Likely just a <div> that is sized according to content. Accepts children (put your image or card inside) and className.
	•	CarouselPrevious / CarouselNext: Buttons for navigation. They are pre-styled button elements (with icons, presumably using ArrowLeft/ArrowRight icons from lucide). They accept button props like className. When clicked, they scroll the carousel. They automatically disable when at the bounds (the component uses context canScrollPrev/Next to disable them【77†L1-L9】).

Usage Example:

<Carousel className="w-full max-w-md">
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <div className="p-2">
          <Card className="shadow-none">
            <CardContent className="aspect-square flex items-center justify-center">
              <span className="text-3xl font-base">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

This will render a carousel of cards numbered 1, 2, 3, etc.【76†L540-L549】【76†L551-L559】. The CarouselPrevious and CarouselNext buttons are placed after the content, but visually they may overlay or sit at the sides (depending on CSS). In the example, each CarouselItem contains a Card (with number) just for demo. In practice, you might put an <img> inside CarouselItem for an image slider, or any custom content.

Key points:
	•	We gave Carousel a width (max-w-md). The CarouselItem content also has a size (aspect-square in example).
	•	The controls (Prev/Next) do not require positioning here; the default CSS likely absolutely positions them or places them.
	•	The Carousel automatically handles dragging, snap alignment, and sets up state for disabling buttons when at ends.

Notes:
	•	The Carousel uses a React context internally to share state (scrollPrev, scrollNext functions, etc.). That’s why CarouselPrevious and CarouselNext can function without explicit props – they call context scroll functions【77†L1-L9】【77†L7-L10】.
	•	You can style the controls: by default, they likely appear as simple arrows possibly positioned at left and right of carousel. The docs CSS might give them fixed positions or just inline after content (the example usage shows them just placed after content, which might cause them to stack below unless CSS does something). Actually, in code, CarouselPrevious and CarouselNext might be absolutely positioned (common approach: position them overlaying the CarouselContent).
	•	By default, Embla doesn’t show scrollbars. If content overflow is more than viewport, user can drag or use buttons.
	•	The group pointer-events-auto relative flex ... in toast’s code snippet doesn’t apply here; for Carousel, the styling is likely minimal aside from sizing.
	•	The CarouselItem likely has flex: 0 0 auto to not shrink and to snap. Embla usually requires each slide to be a fixed width or fraction of container. Possibly the component uses CSS like .embla__slide { flex: 0 0 100%; } if one item per view. But since user can style it, in example they just let Card define width.
	•	If you want multiple items in view, you could set a class on CarouselItem like className="w-1/2" to show 2 at a time, etc.
	•	Orientation vertical would stack items vertically and likely the Prev/Next become Up/Down (not sure if icons or text change).
	•	Always wrap CarouselItem children in a div with some padding if you want spacing between slides, or use CSS margin on CarouselItem. In example, they used p-[10px] (small padding) inside each item【76†L546-L554】.
	•	The Carousel will take the height of its content. If all slides are equal height, layout is stable. If not, container might adjust or you set a fixed height.
	•	If loop is true in opts, the Prev/Next never disable and wrap-around.
	•	No indicators (dots) are provided out of the box. You could implement your own using Embla API (via setApi and hooking into api.on('select', ...) to update an index state and render dots).
	•	Accessibility: Embla doesn’t include ARIA roles by default. Our Carousel might need aria-roledescription="carousel" on the container and aria-label on the content. Not sure if included; likely not automatically. The Prev/Next buttons should have aria-label="Previous slide" and "Next slide" (the component might include <span className="sr-only">Previous</span> inside them). Check if the code includes it; likely yes (they often do sr-only text for screen readers on icon-only buttons).
	•	Embla’s focus trap is not there; users will tab into Prev/Next and can tab to any focusable inside slides. If slides contain interactive items, consider keyboard behavior (maybe allow arrow keys to scroll? Not included by default, you’d implement via Embla API or just rely on drag).

Checkbox

Description: A checkbox input component that allows toggling between checked and unchecked states. It includes a checkmark icon when checked. Built on Radix Checkbox for accessible interactions.

Import:

import { Checkbox } from '@/components/ui/checkbox'

Props:
	•	Checkbox: Extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> (Radix Checkbox root). Key props:
	•	checked: boolean or "indeterminate" – controlled checked state.
	•	defaultChecked: boolean for uncontrolled usage.
	•	onCheckedChange: (checked: boolean) => void, handler when state changes.
	•	id: to pair with a <Label> via htmlFor.
	•	Any other div props (though it renders a button/label combination internally).

The Checkbox component in code is a wrapper that includes the box and an inner check icon. It is styled with:
	•	A fixed size (h-4 w-4, so 16px square)【79†L71-L79】.
	•	Border (via outline classes): outline-2 outline-border plus an outline class to actually show it (so a nice thick border square)【79†L71-L79】.
	•	It uses data-[state=checked]:bg-main data-[state=checked]:text-white meaning when checked, background turns main color and the check icon’s container’s text color becomes white【79†L73-L76】. The check icon itself likely inherits text-current to become black or white appropriately (contrary to code showing <Check color="black" .../> – possibly an oversight since they also set container text-white).
	•	Focus styles (focus-visible:ring etc.) included via Radix or manually similar to Button? We see focus-visible classes present in snippet, yes: focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ring-offset-white and dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black presumably, though not fully visible in snippet, likely similar to others.
	•	Disabled styles: disabled:cursor-not-allowed opacity-50.

Usage Example:

<Checkbox id="subscribe" checked={subscribed} onCheckedChange={setSubscribed} />
<Label htmlFor="subscribe">Subscribe to newsletter</Label>

This will render a checkbox. By default it appears as an empty white square with black border. When subscribed is true, it fills with the main theme color and shows a black checkmark icon (the  icon is rendered inside the indicator, which inherits text-current, but since container has text-white on checked, the icon likely appears white – however code had color=black, so let’s assume they intended white or that they’ve styled via CSS, it might actually be black icon on colored background which might not have enough contrast, possibly a bug). Typically one would expect white check on colored background.

Anyway, clicking the checkbox toggles subscribed state via onCheckedChange.

You should label the checkbox with a <Label> component (from ui/label) or any label. The example above uses the Label component provided, linking by htmlFor/id.

Notes:
	•	The Checkbox component includes an internal <CheckboxPrimitive.Indicator> which contains the check icon SVG【79†L88-L96】. This indicator is only rendered when checked (Radix handles it). The icon is Lucide’s Check set at h-4 w-4. They explicitly set <Check color="black" className="h-4 w-4" />, meaning the checkmark is black regardless. However, because the container when checked has text-white, if the icon were text-current it would be white; but they passed color prop, overriding that. So as coded, a checked checkbox has a black check on a blue background, which is decent contrast as well. In dark mode, blue background with black check might be less contrast; possibly an oversight or intentional stylistic choice. If you prefer a white check, you can modify to <Check className="h-4 w-4" /> without explicit color so it inherits white from container.
	•	Indeterminate state: If you programmatically set checked="indeterminate", Radix will show a line or custom indicator. The component doesn’t define a specific style for indeterminate; Radix’s default might show a small rectangle. You could modify Indicator to show a “minus” icon instead of Check if needed.
	•	The Checkbox is a controlled component with Radix – so use checked/onCheckedChange or uncontrolled defaultChecked. Both work.
	•	It’s a headless checkbox in that you need to provide a label visually. The Label from the library is recommended to get consistent spacing and style next to it.
	•	Accessibility: Radix Checkbox is accessible. The root has role checkbox and aria-checked, and is focusable. Ensuring a <Label> with htmlFor ties it to accessibility API (clicking label toggles, etc.).
	•	Because the checkbox styling uses outline for border, the border doesn’t change with dark mode (still white outline on dark background? Actually, outline-border in dark mode is #000 because border var is black in both, and they also set background to black when checked? Actually no, bg-main in dark mode might be some dark color or maybe also a color). Possibly better to test visually.
	•	Tab index: It will naturally be focusable as a checkbox.
	•	If you want to position the label on the left or right, just structure accordingly (commonly label after checkbox as in example).
	•	The component handles onCheckedChange giving true/false; you don’t need to handle click events on the indicator or root directly.
	•	The size is fixed at 16px; if you need a bigger checkbox (like for mobile-friendly UI), you can add className="h-6 w-6" to enlarge, and also style the inner icon (the  is set at 16px too by class; you might override by targeting .h-6 w-6 on it via custom CSS or just editing the code to scale with parent).
	•	It inherits no text label by default (only the icon changes inner content), so NVDA/JAWS will announce it based on label text if linked, otherwise just “checkbox not checked”.
	•	To style a “checkbox outline on focus” differently, adjust focus-visible classes.

Collapsible

Description: A simple container that can show/hide its content with a toggle. Unlike Accordion (which manages a set), Collapsible is for a single toggle section. It’s built on Radix Collapsible.

Import:

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible'

Props:
	•	Collapsible (Root): from Radix Collapsible. Key props:
	•	open: boolean to control if it’s expanded.
	•	defaultOpen: boolean for uncontrolled.
	•	onOpenChange: callback when toggled.
	•	It also accepts disabled if you want to disable the toggle.
	•	CollapsibleTrigger: A button or trigger element that toggles the collapsible. Use asChild if wrapping a custom element like a Button. Otherwise it renders a <button> by default. When clicked, it expands/collapses the content. Accepts any props of Radix Collapsible Trigger.
	•	CollapsibleContent: The content section (renders as a <div> that Radix will hide/show with height animation). Accepts div props.

Usage Example:

const [isOpen, setIsOpen] = useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
  <div className="rounded-base flex items-center justify-between border-2 border-border bg-main px-4 py-2">
    <h4 className="text-sm font-heading m-0">
      @peduarte starred 3 repositories
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="noShadow" size="sm" className="w-9 bg-bw text-text p-0">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2 text-mtext font-base">
    <div className="rounded-base border-2 border-border bg-main px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-base border-2 border-border bg-main px-4 py-3 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>

In this example (from docs)【81†L95-L103】【82†L133-L141】:
	•	There’s a header section with some text and a toggle button (the ChevronsUpDown icon).
	•	CollapsibleTrigger wraps a Button so it appears nice. When clicked, it toggles isOpen via onOpenChange.
	•	CollapsibleContent contains two items (perhaps a list of something).
	•	Note: The first <div> before CollapsibleTrigger is not a Collapsible subcomponent – it’s just static content always shown (in this case a summary line). The CollapsibleContent holds the extra details that are hidden/shown.

This pattern shows you can have always-visible content plus hidden content. CollapsibleTrigger can be anywhere, but commonly within that always-visible section.

Notes:
	•	By default, Radix Collapsible doesn’t provide animation; content just appears/disappears (though in Radix you can use CSS for transitions). The example likely doesn’t animate height but just shows/hides.
	•	The example explicitly controls state with useState. You can also use uncontrolled: <Collapsible>...</Collapsible> and inside you can do <CollapsibleTrigger /> which manages state internally. If uncontrolled, you might want to use defaultOpen or let it default to closed.
	•	The ChevronsUpDown icon is a double arrow up/down. They wrap it in a Button with asChild. They included an sr-only span for accessibility (“Toggle”)【82†L114-L122】.
	•	The content here is text blocks with monospaced font inside (just to illustrate that content can be anything).
	•	If you need to animate the collapse/expand, you could add CSS: e.g., apply data-state=open on CollapsibleContent to transition height or use Radix’s Collapsible.Content CSS classes.
	•	Accessibility: CollapsibleTrigger is a button with aria-controls pointing to CollapsibleContent’s id, and aria-expanded state. Radix sets that up. Screen readers thus know that button controls showing/hiding content. Ensure CollapsibleContent has an id (Radix likely generates if not) and that it’s labeled properly (the content might need an aria-label if the trigger text doesn’t fully describe it).
	•	Use cases: FAQ answers hide/show, “Show more details” sections, etc.
	•	You can nest Collapsible if needed, though if multiple sections it might be better to use Accordion.
	•	CollapsibleTrigger can be any element: not necessarily a Button component, but using Button from the library is common to have consistent styling.
	•	If disabled prop on Collapsible, triggers won’t toggle.
	•	The className="space-y-2" on Collapsible in example is adding vertical spacing between static and content sections. That is not automatic; they did manually to space the collapsed content below the always visible content.

Combobox

Description: A combobox is an input field with a dropdown list of selectable options, allowing the user to filter the list by typing. The NeoBrutalism library doesn’t provide a single Combobox component per se, but rather a demo composition combining the Command (command palette) component with Popover and Input to create a combobox functionality. In other words, Combobox here is built using other components: it leverages the Command component (which provides a searchable list via the cmdk library) inside a Popover for the dropdown.

Import:
There is no direct Combobox component export aside from possibly an example. The documentation shows ComboboxDemo function as an example. The needed imports for replicating it:

import { Button } from '@/components/ui/button'
import {
  Popover, PopoverTrigger, PopoverContent
} from '@/components/ui/popover'
import {
  Command, CommandInput, CommandList,
  CommandEmpty, CommandGroup, CommandItem
} from '@/components/ui/command'
import { ChevronsUpDown, Check } from 'lucide-react'

(The cmdk library (Command) and Popover are key.)

Props & State (pattern):
	•	Typically you’ll maintain state for:
	•	open (boolean for if the dropdown is open).
	•	value (string for the selected value).
	•	Popover: used to wrap the trigger and content. PopoverTrigger wraps a Button (with role="combobox" and aria-expanded attributes)【86†L129-L137】 which, when clicked, toggles the Popover open.
	•	Command: inside PopoverContent, a Command component is rendered. The Command is essentially an invisible container for the search logic.
	•	Inside Command:
	•	<CommandInput>: an input field to filter options【86†L158-L166】.
	•	<CommandList>: container for the list of items. Inside it:
	•	<CommandEmpty>: what to show if no results (e.g., “No framework found.”)【86†L160-L168】.
	•	<CommandGroup>: group for the items (optional, can group by category).
	•	For each option, a <CommandItem> with onSelect handler【86†L172-L180】.
	•	Each CommandItem has a value prop (for filtering matching) and displays the option. In example, inside each item, they put a check icon and the option label. They control the check icon’s opacity based on whether that item is the currently selected value【86†L184-L192】 (value is in state).
	•	The example provided uses an array frameworks of {value, label} pairs as options【84†L73-L81】.
	•	The combobox’s Button trigger displays the selected option’s label or a placeholder if none selected【86†L139-L147】, and an icon (chevron up/down) on the right.

Usage Example (from docs):

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  // ... etc
];

function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="noShadow" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value 
            ? frameworks.find(fr => fr.value === value)?.label 
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 !border-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map(fr => (
                <CommandItem
                  key={fr.value}
                  value={fr.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check 
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === fr.value ? "opacity-100" : "opacity-0"
                    )} 
                  />
                  {fr.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

This code demonstrates the combobox:
	•	The Button shows either the selected option or placeholder and has an icon.
	•	The PopoverContent contains the Command palette:
	•	CommandInput to filter.
	•	Each CommandItem is selectable; on selection, it sets the state and closes the popover.

Notes:
	•	This Combobox composition requires installing cmdk (the library powering Command).
	•	The Command component uses cmdk to automatically filter the CommandItem based on their value prop matching the CommandInput text. So as you type “sv” it will filter to “SvelteKit”, etc. CommandEmpty shows when none match.
	•	The Check icon in CommandItem is used to mark the currently selected item. They fade it in/out by toggling opacity based on whether the item’s value equals the value state【86†L184-L192】.
	•	aria-expanded on the trigger and role="combobox" make it accessible (screen reader knows it’s a combo).
	•	Could add aria-haspopup="listbox" and tie the popover content with aria-controls if needed.
	•	If using this in a form, ensure to manage the value appropriately (maybe have a hidden input with actual value if needed).
	•	The snippet includes cn utility to conditionally apply classes (like showing check).
	•	The PopoverContent in combobox example has !border-0 p-0 to remove default popover border/padding and allow the command list to fill.
	•	Clicking outside or on an item closes it via onOpenChange or explicit setOpen(false).
	•	You may want to allow keyboard navigation: here, pressing ArrowDown when focus is on the combobox triggers the popover and focus likely goes to CommandInput (Radix Popover by default might not auto-focus, but CommandInput is first element in content so might get focus by default open behavior).
	•	If building multiple comboboxes, abstract this logic or use libraries like headless UI Combobox. But here it’s manual composition.

Command (Command Menu / Palette)

Description: The Command component provides a searchable command palette or selectable list functionality. It’s powered by the cmdk library, which handles filtering and accessibility of a list of commands/items. Use Command when you want to implement something like a Spotlight search or any filterable list UI.

Import:

import {
  Command,
  CommandList,
  CommandInput,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  // (CommandSeparator, CommandDialog also exist if needed)
} from '@/components/ui/command'

Props & Subcomponents:
	•	Command: The container (like a context provider). Likely a <div> that wraps everything. Accepts className and perhaps some minor props but usually none needed; it’s mostly for styling (the docs base shadcn code gives it overflow-hidden and flex column styling【90†L69-L77】).
	•	CommandList: The container for list of items (like a <ul>). In cmdk, it’s required to wrap CommandItem elements.
	•	CommandInput: An input field (text) for filtering. It ties into the Command context so that as the user types, CommandItems are filtered. Props:
	•	placeholder: text.
	•	All standard <input> props (value, onChange if needed – but typically you don’t manage value manually; cmdk does if uncontrolled).
	•	It has built-in icon (a search icon from lucide likely) in the component if following shadcn (the code references a Search icon in the original snippet which might be included as a left icon in the input for design).
	•	CommandItem: Represents an item in the list (like an option/command). It acts like a menu item:
	•	Accepts onSelect={(value) => {...}} which triggers when item is selected (via click or keyboard).
	•	value: string used for filtering match. If not provided, children text might be used by default.
	•	It uses forwardRef to an element, likely a <div role="option"> or something of that sort.
	•	Within an item, you can render anything (text, icon).
	•	The item has built-in keyboard handling: arrow keys navigate, Enter triggers select, etc. (cmdk manages this).
	•	CommandGroup: A way to group items under a heading:
	•	Prop heading: if provided, maybe a label for the group.
	•	It will render items grouped, likely with an optional label at top. (In shadcn, CommandGroup is just a wrapper that might render a heading and then children; need to see usage).
	•	Useful if commands are categorized.
	•	CommandEmpty: A placeholder rendered when no items match the current input query.
	•	Just put as child of CommandList (usually after CommandInput and before CommandGroup) with a message.
	•	CommandSeparator: Possibly a visual separator (like a horizontal line) if needed to break up groups (not always used).
	•	CommandDialog: Not exactly part of composition here, but in shadcn, they sometimes provide a CommandDialog which combines a Dialog and Command for an overlay command palette triggered by a keyboard shortcut (like Slack’s quick switcher). In NeoBrutalism, they might not explicitly include it, but you can easily use Command inside a Dialog or Popover as shown.

Usage Example: (Simpler than combobox, e.g. a standalone command palette)

<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="File">
      <CommandItem onSelect={() => openFile()}>
        <FileIcon className="mr-2 h-4 w-4" />
        Open File...
      </CommandItem>
      <CommandItem onSelect={() => saveFile()}>
        <SaveIcon className="mr-2 h-4 w-4" />
        Save File
      </CommandItem>
    </CommandGroup>
    <CommandGroup heading="Edit">
      <CommandItem onSelect={() => undo()}>
        <UndoIcon className="mr-2 h-4 w-4" />
        Undo
      </CommandItem>
      <CommandItem onSelect={() => redo()}>
        <RedoIcon className="mr-2 h-4 w-4" />
        Redo
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

This would create a command palette with a search bar. As you type, it filters “Open File”, “Save File”, “Undo”, “Redo” etc. Group headings “File” and “Edit” remain (they’re not items, just labels). If nothing matches, “No results found.” appears.

Notes:
	•	Filtering logic: By default, cmdk does fuzzy search on item values. Ensure value prop on CommandItem is set to what you want searchable (like “open-file” vs display text).
	•	Selection and Keyboard: Items can be selected via click or keyboard. Arrow Down/Up to navigate, Enter to select. The active item gets a class (maybe aria-selected or data-selected) so you could style highlight. The shadcn styling likely includes something for cmdk-item focusing.
	•	Styling: The default styles applied (from shadcn base) likely make:
	•	CommandInput full width with some padding, maybe slight border bottom.
	•	CommandItem have padding, cursor-pointer, and highlight on selection. For example, in shadcn, .cmdk-item often has flex items-center px-2 py-1.5 text-sm cursor-default rounded-base focus:bg-main focus:text-mtext or similar to highlight with main color on focus. Check CommandItem code if possible.
	•	Group headings have a style like px-2 text-xs font-medium text-muted-foreground (maybe greyed out label).
	•	The NeoBrutalism version might adapt these to the brutalism theme (e.g., focus state with border).
	•	Command vs Combobox: Use Command for implementing things beyond a basic select: e.g., a palette accessible via keyboard shortcut, or any dynamic list filtering. For a typical dropdown select with filter, the combobox pattern (Command + Popover) is used as above.
	•	Dependencies: ensure cmdk is installed.
	•	Accessibility: cmdk takes care of roles (listbox, option, etc.) behind the scenes. The CommandInput is a textbox with aria-controls linking to the list.
	•	If using CommandDialog (which wraps a Radix Dialog around Command), ensure to include that if needed for a global command palette overlay. The library’s code references it possibly (like they import Radix Dialog in command.tsx and create CommandDialog that uses DialogContent to host Command【90†L81-L89】). If you want a modal command palette, you can use CommandDialog similarly to how Popover was used (just open a modal with Command inside).
	•	Example from docs on Command usage is in Combobox and possibly nothing else. But one could adapt that.

Context Menu

Description: A context menu (right-click menu) component that displays a menu of actions when a user right-clicks or triggers it via another way. Based on Radix ContextMenu, it provides subcomponents for items, groups, checkable items, radio items, sub-menus, etc. It’s essentially like a Menu but invoked via context.

Import:

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuShortcut
} from '@/components/ui/context-menu'

This looks like a lot, but parallels Radix Menu / ContextMenu:
	•	ContextMenu: the root context that ties a trigger to content.
	•	ContextMenuTrigger: the element that when right-clicked (or with contextmenu event) opens the menu. It should wrap whatever target element (for example, a div or text).
	•	ContextMenuContent: the dropdown menu panel that shows the list of actions.
	•	ContextMenuItem: a single clickable item in the menu.
	•	ContextMenuSeparator: a divider (horizontal line) between groups of items.
	•	ContextMenuLabel: a non-clickable label, often to label a section of items.
	•	ContextMenuCheckboxItem: an item that can be toggled (shows a checkmark when active).
	•	ContextMenuRadioGroup: a container for radio items (so only one in group can be selected).
	•	ContextMenuRadioItem: an item that acts like a radio option (shows a bullet or check when selected).
	•	ContextMenuSub: a wrapper for a submenu.
	•	ContextMenuSubTrigger: an item that opens a submenu (usually shows an arrow indicating it has a submenu).
	•	ContextMenuSubContent: the dropdown panel for the submenu.
	•	ContextMenuShortcut: a small text element aligned to the right of an item (often to display keyboard shortcut hint, e.g., “⌘+T” next to “New Tab”).

Props & Usage:
	•	ContextMenu (Root): Usually used with no props; just wrap trigger and content inside.
	•	ContextMenuTrigger: Wraps the element that should have the menu on right-click. Can be used as <ContextMenuTrigger asChild> if you want to attach it to an existing element.
	•	ContextMenuContent: Accepts styling props like className (you can constrain width, etc.). It has the menu items as children.
	•	ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuSubTrigger: Each of these is interactive.
	•	They likely accept onSelect or onClick to handle action, and disabled to disable.
	•	The CheckboxItem and RadioItem have a controlled state:
	•	CheckboxItem can have checked or defaultChecked and an onCheckedChange.
	•	RadioItem typically used within a RadioGroup where value prop indicates which is selected (RadioGroup might have value and onValueChange).
	•	SubTrigger: likely similar to MenuItem but with an arrow icon automatically added.
	•	ContextMenuLabel: just a styled label (e.g., maybe gray, uppercase, small text).
	•	ContextMenuSeparator: no props (just place it to separate).
	•	ContextMenuShortcut: just a span; purely visual.

Usage Example (from docs):
The documentation usage (the one from earlier) shows a context menu for a simplified browser context:

<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center border border-text border-dashed text-sm font-base">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As... <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
      Show Bookmarks Bar <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem checked={showFullURLs} onCheckedChange={setShowFullURLs}>
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuLabel inset>People</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>

This example (based on docs snippet【95†L489-L497】【95†L553-L561】 and surrounding lines) shows:
	•	The trigger is a dashed rectangle that says “Right click here”.
	•	The content menu has:
	•	Basic items: Back, Forward (disabled), Reload. They all have inset prop which adds an inset margin (so that items without icons align with those that have icons, by adding padding-left)【92†L91-L99】. Inset likely adds a left padding (they pass an inset boolean prop to SubTrigger and Items and Label).
	•	A submenu “More Tools” which opens another ContextMenuContent with items.
	•	Checkboxes for “Show Bookmarks Bar” and “Show Full URLs”.
	•	A radio group titled “People” with radio items “Pedro Duarte” and “Colm Tuite”.
	•	Shortcuts are displayed on some items (like ⌘R).
	•	The example uses state (showBookmarks, person, etc.) to control the checkboxes and radio selection.

Notes:
	•	The menu items are styled with bg-main text-mtext on focus or selection perhaps. The code shows classes like border-2 border-transparent bg-main on SubTrigger in open state【92†L91-L99】 so likely:
	•	Items default background is main (blue) and border transparent, and on focus they add a border maybe? Actually, when the submenu is open, the parent SubTrigger gets a border (to show it’s active).
	•	Inset: adds pl-8 if inset prop true (some items have an icon area reserved).
	•	The library likely ensures correct ARIA roles:
	•	Content has role="menu", items role="menuitem", etc.
	•	The trigger listens to right-click automatically (Radix does this; a normal left-click might not open it).
	•	To trigger programmatically, you could do <ContextMenuTrigger onContextMenu={(e) => { e.preventDefault(); ... }}> but Radix handles contextmenu event.
	•	If you need to open via left click, consider using Dropdown Menu instead.
	•	The difference between ContextMenu and DropdownMenu is just trigger type (right-click vs click) but they have similar subcomponents (DropdownMenu* components).
	•	The ContextMenuShortcut is just styled text to the far right. In CSS they might use flex justify-between on items and then style .shortcut class to a muted color and text-xs.
	•	You can heavily customize items (include icons on left by just adding before text). The inset prop is handy when some items have icons and some not – it ensures text aligns uniformly by adding padding on those missing icons.
	•	The state hooks (showBookmarks etc.) manage check state. Radix will handle internal check mark display on CheckboxItem automatically (the code likely inserts a check icon similar to Checkbox for checked state).
	•	Similarly, for RadioItem, Radix will display a dot or indicator for the selected radio.
	•	ContextMenuRadioGroup ensures only one radio can be selected and provides a value context to its children.
	•	For nested submenus, ensure structure as above: ContextMenuSub -> SubTrigger + SubContent inside. The submenu opens on hover or arrow right on parent. Radix handles delays for submenu to avoid flicker.
	•	Accessibility: Radix sets proper roles and aria-checked on check/radio items, and groups have aria-label (ContextMenuLabel usage or sr-only).
	•	You should wrap actions in appropriate click handlers. The onSelect of Radix might be used to close on selection by default. Possibly they used onSelect or just onCheckedChange for controlled.
	•	Make sure to include lucide icons used (ChevronRight, Check, Circle etc. are likely used internally via imports at top of context-menu.tsx【92†L53-L61】 to indicate submenus and check state – the code shows lucide Check, ChevronRight, Circle imported).
	•	If customizing sizes, adjust Content width or item padding accordingly.
	•	The example sets width classes on Content for main and sub content.

Date Picker

Description: A date picker component that combines an input trigger with the Calendar component to allow selecting a date from a pop-up calendar. It was not a single importable component, but the docs provide an example composition (similar to Combobox) using Popover + Calendar.

Import (components used):

import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Calendar as CalendarIcon } from 'lucide-react'  // icon

Pattern Props & State:
	•	Usually, maintain state for the selected date (e.g., selectedDate) at parent level.
	•	Use a Popover to display the Calendar.
	•	The trigger is often a Button that shows either the formatted date or a placeholder (e.g., “Pick a date”).
	•	When a date is selected on the Calendar, close the popover.

Usage Example (from docs):

const [date, setDate] = useState<Date>();  // undefined initially

<Popover>
  <PopoverTrigger asChild>
    <Button variant="noShadow" className={cn(
      "w-[280px] justify-start text-left font-base",
      !date && "text-muted-foreground"   // style placeholder differently
    )}>
      <CalendarIcon className="mr-2 h-4 w-4 text-mtext" />
      {date ? format(date, "PPP") : <span className="text-mtext">Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0 !border-0">
    <Calendar 
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus 
    />
  </PopoverContent>
</Popover>

In this example:
	•	The Button (trigger) shows a CalendarIcon and either the formatted date or placeholder text. It’s styled to look like an input field (left-aligned text).
	•	format(date, "PPP") uses date-fns to format, which yields a formatted date like “Jan 1, 2025” (PPP is a long format).
	•	The PopoverContent wraps the Calendar component.
	•	initialFocus on Calendar ensures when opened, the calendar grid is focused for keyboard navigation【99†L189-L197】.
	•	When a date is picked (onSelect called with the date), date state updates. The Popover here doesn’t automatically close on date select in the code snippet. If you want it to close, you can either control open state of Popover and setOpen(false) in onSelect or rely on clicking outside to close. Many date pickers close upon selection. You might integrate that.

Notes:
	•	The Button is given role="combobox" possibly implicitly by ARIA since it’s not actual input. But as a date picker, you should consider accessibility:
	•	Use aria-haspopup="dialog" on trigger (or menu).
	•	Provide aria-label on the trigger or an attached label for screen readers, e.g., “Choose date”.
	•	Alternatively, use an actual <input type="text"> with date formatting and make it readOnly, then attach a popover to a button icon. But the given approach is fine.
	•	The text-muted-foreground class used when no date is selected likely sets placeholder text color (maybe a grey). The docs might have that class defined to a grey.
	•	The PopoverContent had !border-0 p-0 to let the Calendar’s own border show (Calendar has its own border).
	•	Calendar’s selected can be undefined or a Date. Ensure Calendar’s mode matches usage (single).
	•	This composition is similar to the default shadcn date picker example, adjusted to neo theme.
	•	date-fns is used for formatting; ensure installed (format imported from date-fns).
	•	If you want time selection or date range, you’d extend this pattern (range mode on Calendar and perhaps customizing trigger to show range).
	•	Accessibility: The Calendar is accessible, but a screen reader user would need to know what the button does. Use aria-label="Date" or visually hide a label “Date”.
	•	For keyboard: If Calendar is focus trapped inside Popover, user can navigate days. To open popover via keyboard, focus the button then press Enter or Space.
	•	There’s no separate “DatePicker” component exported, but this pattern can be encapsulated if needed.

Data Table

Description: A data table is not a single component but rather a combination of Table (for layout) and possibly additional logic for sorting/filtering. The docs likely provided an example using TanStack Table (react-table) along with the Table, Input, Dropdown components to create a fully featured data table.

Status: The documentation indicates they have a Data Table page, likely providing a guide. It might include:
	•	Setting up columns definition and row data.
	•	Using <Table> component for rendering (the Table component from library provides stylized table structure).
	•	Possibly adding a toolbar with a search Input and a Dropdown Menu for column filters, etc.

Import (expected components):

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
// plus TanStack Table hooks for sorting, etc.

Props: The Data Table is likely built following Shadcn’s Data Table example, which uses TanStack Table.
	•	There might not be a distinct DataTable component in code, but a composition:
	•	Define columns array with accessor keys and cell renderers.
	•	Define data array of objects.
	•	Use useReactTable from @tanstack/react-table to create a table instance.
	•	Then use the provided Table UI components to map header groups and rows.

Example (conceptual, simplified):

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'title', header: 'Title' },
  { accessorKey: 'email', header: 'Email' }
];
const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

<Table>
  <TableHeader>
    {table.getHeaderGroups().map(headerGroup => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map(header => (
          <TableHead key={header.id}>
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
  <TableBody>
    {table.getRowModel().rows?.length ? (
      table.getRowModel().rows.map(row => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map(cell => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          No results.
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>

(This is essentially the pattern from Shadcn’s Data Table guide.)

On top of this, one might add:
	•	A caption or heading via <TableCaption>.
	•	Inputs for filtering: e.g., an <Input placeholder="Filter names..."> that changes the table’s filtering state.
	•	DropdownMenus for column visibility or actions.

The NeoBrutalism styling for Table likely includes:
	•	Table has base styles (maybe w-full border-collapse).
	•	TableHead cells have bold text, bottom border perhaps.
	•	TableCell has border-t maybe.
	•	Alternating row highlights possibly none (maybe you can stripe by adding classes).
	•	Focus or hover on rows? Possibly hover highlight if clickable.

Notes:
	•	Given complexity, Data Table likely not expected to be fully documented as component but as a usage of other components.
	•	If using Data Table, consult the specific Data Table docs on the site (which likely mirror Shadcn’s data table usage).
	•	The library’s Table component is simpler: see Table section below for styling details of Table, TableRow, etc.

Dialog

Description: A general-purpose dialog (modal) component. Similar to AlertDialog but for non-destructive or general content. Use Dialog for forms or info that appears in a modal overlay.

Import:

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog'

Props & Subcomponents:
	•	Dialog (Root): Controls the open state. Has props:
	•	open, onOpenChange for controlled usage (optional).
	•	Otherwise, state is handled by internal when using Trigger.
	•	DialogTrigger: The element that opens the dialog on click## Introduction & Installation

NeoBrutalism UI is a collection of React components styled in the neo-brutalist aesthetic. Neo-brutalism in web design combines raw, “unpolished” interface elements (think thick black outlines, flat colors, bold text) with modern UX functionality【3†L31-L39】. The goal is to embrace a distinctive look while maintaining usability.

Most components in this library are based on Radix UI primitives via shadcn/ui【3†L31-L37】. This means you get well-structured, accessible components out of the box, with a neo-brutalist skin.

Key Features
	•	Bold Aesthetics: High-contrast elements, visible borders, and unconventional layouts【3†L33-L41】.
	•	Tailwind CSS: All styles are done with Tailwind classes, making it easy to customize via Tailwind configuration.
	•	Accessible: Components follow accessible patterns (keyboard navigation, screen-reader friendly).
	•	Composable: Many components are headless primitives (e.g., menu, dialog) you can compose with your content.
	•	Theming: Easily theme via CSS variables or utility classes to fit your brand.

Installation

Requirements: React, Tailwind CSS v3.x, and optionally Radix UI (if using shadcn CLI, Radix will be installed for you). Note: Tailwind v4 support is in progress; use v3 for now【5†L31-L39】.
	1.	Add NeoBrutalism to your project: There isn’t an npm package; instead, you add components manually (using the shadcn UI CLI or copy-pasting from docs).
	•	If starting fresh with Next.js, run npx create-next-app@15.1.7 to ensure Tailwind v3 is set up【5†L41-L46】.
	•	Install Tailwind CSS v3 in your project (per Tailwind docs)【5†L43-L51】.
	2.	Install shadcn/ui CLI:
This CLI fetches component templates. Initialize shadcn (see shadcn docs)【5†L53-L60】. When prompted Use CSS variables for theming? – enter Yes. (Choosing “No” can cause a bug with utility class variants【5†L60-L67】.)
	3.	Add NeoBrutalism Styles:
Copy the base styles from the NeoBrutalism docs into your global CSS:

/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --main: #88aaee;
  --overlay: rgba(0, 0, 0, 0.8);
  --bg: #dfe5f2;
  --bw: #fff;
  --blank: #000;
  --border: #000;
  --text: #000;
  --mtext: #000;
  --ring: #000;
  --ring-offset: #fff;
  --border-radius: 5px;
  --box-shadow-x: 4px;
  --box-shadow-y: 4px;
  --reverse-box-shadow-x: -4px;
  --reverse-box-shadow-y: -4px;
  --base-font-weight: 500;
  --heading-font-weight: 700;
  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0 0 var(--border);
}
.dark {
  --bg: #272933;
  --bw: #212121;
  --blank: #fff;
  --border: #000;
  --text: #e6e6e6;
  --mtext: #000;
  --ring: #fff;
  --ring-offset: #000;
  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0 0 var(--border);
}

These CSS variables define the default color palette, border radius, and shadow offsets for the brutalist theme【8†L81-L90】【8†L108-L117】. In light mode, it’s black on pastel blue; in dark mode, mostly inverted (though the author notes dark mode neo-brutalism is experimental【9†L164-L172】).
Configure Tailwind to use these variables. In tailwind.config.js:

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        overlay: 'var(--overlay)',
        bg: 'var(--bg)',
        bw: 'var(--bw)',
        blank: 'var(--blank)',
        border: 'var(--border)',
        text: 'var(--text)',
        mtext: 'var(--mtext)',
        ring: 'var(--ring)',
        ringOffset: 'var(--ring-offset)',
        secondaryBlack: '#212121', // optional: used in docs comments
      },
      borderRadius: {
        base: 'var(--border-radius)',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
      translate: {
        boxShadowX: 'var(--box-shadow-x)',
        boxShadowY: 'var(--box-shadow-y)',
        reverseBoxShadowX: 'var(--reverse-box-shadow-x)',
        reverseBoxShadowY: 'var(--reverse-box-shadow-y)',
      },
      fontWeight: {
        base: 'var(--base-font-weight)',
        heading: 'var(--heading-font-weight)',
      },
    },
  },
  darkMode: 'class',
  // ...
}

Now Tailwind classes like bg-main or shadow-shadow will use these CSS vars【8†L127-L136】【8†L147-L155】.

	4.	Install Components: Use the CLI to add components from the registry. On each docs page, you’ll find a command. For example:

pnpm dlx shadcn@latest add https://neobrutalism.dev/r/button.json

This will generate the Button component file in your project under components/ui/. The docs have a similar CLI command for each component. Use the CSS Variables variant URLs (default on neobrutalism.dev) if you chose CSS vars for theming (the URL .../r/[component].json points to the CSS var version, whereas util.neobrutalism.dev is utility-class version【6†L86-L94】).
If no CLI command is provided (some custom components), copy the code manually from the docs into your project (the docs link to the original shadcn component as a reference)【6†L96-L104】.
Tip: The components often have extra variants or differences from stock shadcn. Be sure to use the NeoBrutalism version so styles match.

	5.	Verify Tailwind Config: Ensure your tailwind config content includes your component paths (e.g., ./components/ui/**/*.{js,ts,jsx,tsx}) so classes in those files are recognized.

After these steps, you can import and use the components in your app. For example:

import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button>Welcome</Button>;
}

You should see a button with black border, blue background, and a slight drop shadow. If the styling looks off:
	•	Make sure the CSS variables from Styling were added and Tailwind config extended.
	•	Confirm you have Tailwind v3 (the classes like shadow-shadow might not work in v4 without enabling legacy or adjusting config).

Usage Notes
	•	CSS Variables vs. Utility Classes: The library was initially utility-class based. Now it supports CSS variables for easier theming. We used CSS vars above. Alternatively, you could avoid CSS vars and use utility classes (then your component classes would contain dark: variants explicitly). The documentation uses CSS vars by default for simplicity.
	•	Dark Mode: Enabled via adding class="dark" on an element (e.g., <html class="dark">). The variables adjust automatically【8†L108-L116】. Use dark mode with caution, as the author mentioned it’s challenging to design; but it’s available.
	•	Figma: A Figma file is available with all components if you need design references【13†L29-L36】.
	•	Updates: Check the Changelog for updates【14†L33-L42】. Notably, support for the shadcn CLI and CSS variables was added in late 2024【14†L39-L47】.

Now, let’s dive into the components!

⸻

Theming & Styling

NeoBrutalism UI’s look is defined by a set of design tokens (colors, radius, shadows, font weights). You can adjust these to customize the theme.

Base Theme:
	•	Background (bg): #dfe5f2 (a light gray-blue) by default, dark mode #272933【8†L108-L114】.
	•	Main (main): #88aaee (pastel blue) for primary accents【8†L81-L89】.
	•	Text (text): #000 (black text on light), dark mode #e6e6e6 (light gray text)【8†L111-L114】.
	•	Border (border): #000 (borders are black in both modes)【8†L89-L96】.
	•	BW (bw): “Black/White” – used for surfaces that invert in dark mode. Light mode #fff (white), dark mode #212121 (very dark gray)【8†L85-L93】.
	•	Blank (blank): Opposite of BW: black in light mode, white in dark (if needed).
	•	Overlay: semi-transparent black (rgba(0,0,0,0.8)) for modals overlays【8†L81-L89】.
	•	Font Weights: base 500, headings 700【8†L101-L109】.
	•	Border Radius: 5px (small rounding on corners)【8†L97-L100】.
	•	Shadow Offsets: 4px shift (x and y) for drop shadows, to create the “offset shadow” effect【8†L97-L100】.
	•	Shadow Color: uses border (black) for shadow, giving that hard drop shadow look.

CSS Variables vs Utility Classes:
	•	CSS Variable approach (we used above): You define the palette once, and use generic classes (bg-main, text-text, etc.). This is convenient for theming and dark mode (toggle .dark class).
	•	Utility Classes approach: Every component’s classes include explicit colors (e.g., bg-[#fff] dark:bg-[#212121] instead of bg-bw). This can be more verbose, but doesn’t rely on CSS vars. The components in the NeoBrutalism docs can be switched to the utility version by toggling “Utility classes” tab. If you prefer that, ensure to copy those variants and include any needed Tailwind plugin for dark mode.

Changing Theme: Simply override the CSS variables in :root or .dark to change the look. E.g., to use a green theme, set --main: #a8e888; (and maybe adjust --mtext for contrast).

Customization Example: Want pink highlights and no rounding?

:root {
  --main: #f5a7f0;
  --mtext: #000;
  --border-radius: 0px;
}
/* In Tailwind config, borderRadius.base will use 0px now */

All components that use rounded-base will become square. Buttons and other accents will be pink.

Fonts: By default, no font family is specified (uses your project’s CSS). The docs suggest some free fonts for a neo-brutalist vibe【12†L31-L39】, like Inter, DM Sans, Work Sans etc. To use, import from Google Fonts and apply to body or specific classes. For example, to apply a display font for headings:

.font-heading {
  font-family: 'Archivo', sans-serif;
}

Now all headings (which use font-heading class) will use Archivo.

Responsive Design: The components use responsive utilities as needed (e.g., some components have sm: variants). The theme values (colors, etc.) remain same across breakpoints. If you need to adjust spacing or layout per screen, just add your own responsive classes when using the components (e.g., <Button className="px-8 sm:px-4"> to reduce padding on small screens).

Dark Mode Toggle: The CSS above assumes you add a .dark class on a parent (like html). This is Tailwind’s class strategy. If you prefer media (based on OS preference), adjust darkMode in config. But class strategy is often easier to control manually.

Developer Tips:
	•	Many components have an className prop to pass additional classes. Use this to tweak spacing, sizing, or even override colors on a one-off basis.
	•	Components often expose their internal pieces for styling. For instance, Alert uses AlertTitle and AlertDescription; you can target those or replace them if needed.
	•	Use dev tools to inspect an element and see which CSS var or class is responsible for a style if you want to override it.

Next, we’ll go through each component in the library, with details on usage and props.

⸻

Component Library

Below is the list of UI components provided by NeoBrutalism UI. Each component section includes:
	•	Description: When and why to use the component.
	•	Import: The import statement for the component(s).
	•	Props: Notable props and variants.
	•	Usage: Example usage code (with Tailwind classes for illustration).
	•	Notes: Extra info like accessibility or customization tips.

(Components are listed in alphabetical order as per the docs navigation.)

Accordion

Description:
An Accordion is a vertically stacked set of expandable sections. Use it to toggle visibility of content areas, one at a time (or multiple, depending on configuration). For example, FAQ lists or content toggles.

Import:

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

Props & Usage:
	•	<Accordion>: Container for items.
	•	type: "single" (default) or "multiple". Single means only one item can be open at once. Multiple allows many open.
	•	collapsible: (boolean) if true in single mode, allows closing the last open item【50†L175-L183】. Often set true so users can close all.
	•	It accepts className (e.g., width or margin).
	•	<AccordionItem>: Wraps each accordion section.
	•	value: string, required. An identifier for the item (used internally for open/close state).
	•	It’s a <div> (actually Radix uses <Accordion.Item> which is a semantic region).
	•	<AccordionTrigger>: The trigger button users click to expand/collapse the section.
	•	It renders a <button> element. Put the section title as children.
	•	It accepts asChild if you want to use a custom element (rare; usually just use default).
	•	<AccordionContent>: The collapsible panel content.
	•	Put your content here (text, other components).
	•	It’s a <div> that will be shown/hidden. Can contain anything.

Example:

<Accordion type="single" collapsible className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is NeoBrutalism?</AccordionTrigger>
    <AccordionContent>
      NeoBrutalism is a design aesthetic that embraces high contrast and "unpolished" elements while maintaining modern usability.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. The accordion follows WAI-ARIA patterns and is fully keyboard navigable.
    </AccordionContent>
  </AccordionItem>
</Accordion>

By default, the accordion trigger has an arrow icon on the right that rotates when open (handled via CSS). The styling:
	•	Triggers have a bold header style with a drop shadow effect on the border when closed【48†L75-L83】【48†L99-L107】.
	•	The open trigger likely loses shadow to indicate active state.
	•	Content area has padding (by default 1rem, class p-4 via internal styles)【50†L151-L159】.

Notes:
	•	Accessibility: AccordionTrigger is a <button> with proper aria-controls and aria-expanded tied to its content panel. The content has role="region" with aria-labelledby referencing the trigger. This is handled by Radix; just ensure unique value for each item.
	•	If you need to open/close accordion via external controls, manage state via the open prop on Accordion (Radix provides openItems etc., but easier might be to use uncontrolled for simple uses).
	•	The default icon can be customized. The CSS targets &[data-state=open] > svg to rotate the chevron【48†L99-L107】. The icon itself is embedded via a ::after or an actual <ChevronDown> SVG in the trigger. If you need a different icon, you might edit the component code to replace Lucide icon (search for ChevronDown).
	•	Styling: The accordion items have a black border and are bordered together. The last item might not have a bottom border (to avoid double line). This is taken care of by border-b on all but last (maybe).
	•	Add className on AccordionContent or inner elements if you need to style the content text (e.g., add background on content, etc.).

Alert

Description:
Alerts are used to display prominent messages to the user. They typically appear within the interface (not as a modal) to show success, warning, or info messages. The Alert component is a simple container with stylized border, background, and optional icon slot.

Import:

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

Props & Usage:
	•	<Alert>: The alert container (<div role="alert">).
	•	variant: Controls color scheme. "default" (default) has a colored background (the main theme color)【44†L73-L81】, "destructive" has a red/black style for errors.
	•	It accepts any div props like className.
	•	<AlertTitle>: A subcomponent for a bold title text (rendered as an <h5> in the component code)【44†L125-L133】.
	•	<AlertDescription>: For longer text or additional info (rendered as a <div> with normal font)【44†L147-L155】.

Example:

<Alert variant="default">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your profile has been updated.</AlertDescription>
</Alert>

<Alert variant="destructive" className="mt-4">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Unable to save changes. Try again later.</AlertDescription>
</Alert>

The first alert will have a light blue background with black text (since default variant uses bg-main text-mtext)【44†L75-L78】. The second will have a black background with white text (destructive uses bg-black text-white)【44†L75-L79】.

By default, an alert can also include an icon. If you include an SVG as a direct child of <Alert> before the title, the styles position it to the left with some spacing:

<Alert>
  <Icon name="info" />  {/* pseudo-code: place an SVG icon */}
  <AlertTitle>Notice</AlertTitle>
  <AlertDescription>We updated our terms of service.</AlertDescription>
</Alert>

The Alert styles will position the icon absolutely and add padding to content so it doesn’t overlap【44†L65-L73】. Ensure the SVG has appropriate size (e.g., className=“h-4 w-4”).

Notes:
	•	The entire Alert is one role="alert" region, so screen readers will announce the contents immediately if they appear dynamically.
	•	Keep Alert text concise. Use AlertTitle for a short heading (like “Success”, “Error”, etc.) and put details in AlertDescription.
	•	If an action is needed on an alert (e.g., “Undo” button), you can include a Button in the AlertDescription or as a child, but consider using a Toast for transient actions.
	•	The variant prop currently only has “default” and “destructive”. You could extend it (e.g., a “warning” variant with yellow background) by modifying the alertVariants in the component code【44†L73-L81】.
	•	The black border around the alert is always present (border-border which is black)【44†L65-L73】. So even on dark destructive (black bg), it has a black border (which you won’t see). You could remove border for destructive via a custom class if desired (or change border var in dark mode to white, but that affects all components).
	•	The alert’s padding is p-4 (1rem) all around【44†L65-L73】, and it has a drop shadow by default (shadow-shadow) giving a subtle depth.

Avatar

Description:
Avatar displays a user profile image (or any image) in a circular frame, with support for a fallback (e.g., initials) if the image fails or is not provided. Useful for user profiles, user lists, etc.

Import:

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

Props & Usage:
	•	<Avatar>: Container for image. It’s a relatively positioned div by default.
	•	It has a default size of 40px (Tailwind class h-10 w-10) and rounded-full for a circle shape【53†L71-L79】.
	•	Also has overflow-hidden to clip the image, and a 2px outline border (outline-border) which gives a thick border around the circle【53†L71-L79】.
	•	You can add className to adjust size (e.g., h-16 w-16 for 64px) or shape (though circle is typical).
	•	<AvatarImage>: The actual image element.
	•	Props: src, alt (provide an alt text! If the avatar is just decorative, alt can be empty).
	•	It fills the parent container (h-full w-full)【53†L97-L105】.
	•	It’s hidden if not loaded or fails (Radix handles that).
	•	<AvatarFallback>: Fallback content when image is unavailable.
	•	Props: typically none besides children and className.
	•	Use children to provide text (like initials “JD”) or an icon.
	•	It will be absolutely positioned to fill the Avatar as well.

Example:

<Avatar className="h-12 w-12">
  <AvatarImage src="/users/john.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

This will display John’s picture in a 48px circle. If the image fails to load, it will show “JD” centered. The avatar has a black border (the outline) around the circle.

Typically, use AvatarFallback either for initials or a generic user icon:

<Avatar>
  <AvatarImage src={user.imageUrl} alt={user.name} />
  <AvatarFallback>
    <span className="text-sm">{initials}</span>
  </AvatarFallback>
</Avatar>

Notes:
	•	The outline is a nice brutalist touch (it will appear as a square outline around the circle because CSS outline doesn’t follow border-radius). If you want a circular border instead, you could change it to use border-2 border-border and add rounded-full to Avatar, but note the border will overlap the image slightly or change size.
	•	The component uses Radix Avatar primitive internally to handle loading/fallback logic. It will add aria-hidden appropriately.
	•	If using a very light main theme and a white image, the outline might not be visible on a white background. In that case, you might want to change outline color (outline uses border var, which is black by default).
	•	Avatar supports any content as fallback, but keep it simple (initials or icon). The font size for fallback can be adjusted via class (the Avatar itself doesn’t set font-size).
	•	For a group of avatars (like a stack of user pictures), you’ll handle layout (like applying -ml-2 margin to overlap them).
	•	Accessibility: If the avatar is labeled by nearby text (like username right next to it), you could give AvatarImage alt="" to avoid redundancy. If not, ensure alt has the user’s name or description.

Badge

Description:
A small badge used to highlight an item or status. Usually appears as a pill-shaped label, e.g., “New”, “Beta”, or numeric counts. It’s typically inline with text or UI elements.

Import:

import { Badge } from "@/components/ui/badge";

Props & Usage:
	•	<Badge>: The badge component is a <div> with styling.
	•	variant: controls color scheme. "default" is colored (main color background)【57†L69-L77】, "neutral" is neutral (white background, black text)【57†L71-L73】.
	•	Accepts children (the badge text or icon).
	•	You can pass className to override or add styles.
	•	Size is fixed via padding (Tailwind: text-xs px-2.5 py-0.5)【57†L59-L67】.

Example:

<Badge>New</Badge>
<Badge variant="neutral" className="ml-2">Draft</Badge>

This will produce a “New” badge with default styling (blue background, black text, black border)【57†L71-L79】, and a “Draft” badge that is neutral (white background, black text, black border)【57†L71-L77】, with a left margin separating them.

Badges can also contain icons:

<Badge><StarIcon className="mr-1 h-3 w-3" /> Featured</Badge>

Just be mindful of the small font size when sizing icons (here h-3 is 12px, which fits with text-xs).

Notes:
	•	Badges have a black border by default (border-2 border-border)【57†L59-L67】 which helps them stand out on any background.
	•	They are inline-flex, so they flow with text. If you need them to be standalone or bigger, consider using Button with a pill shape for something clickable.
	•	Two variants are defined. If you want additional variants (say “secondary” in gray), you’d modify the Badge component (adding a variant in the CVA config and corresponding class).
	•	If using neutral variant on a dark background (with dark mode), note bg-bw in dark mode is #212121 (dark gray) and text-text is light text【57†L71-L77】. So neutral badges invert in dark mode (white text on dark gray) – effectively a “inverse” style. The default badge in dark mode would be bg-main (maybe the main color or its dark mode variant if you’ve adjusted main var for dark).
	•	The focus:outline-none focus:ring etc. are included for accessibility (so if a badge is focusable for some reason, though usually badges aren’t interactive).
	•	To make a badge interactive (like a filter tag with a remove “x”), you might wrap it in a button or add an onClick. But by default, Badge is just a styled span/div.

Breadcrumb

Description:
Breadcrumbs provide a navigation trail, indicating the page’s position in the site hierarchy. Typically rendered as a horizontal list of links separated by a divider (e.g., Home / Section / Page).

Import:

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbEllipsis
} from "@/components/ui/breadcrumb";

Structure & Usage:
A breadcrumb is composed of multiple parts to allow flexibility:
	•	Breadcrumb: The outer wrapper, essentially a <nav aria-label="breadcrumb"> element【61†L69-L72】.
	•	BreadcrumbList: An ordered list (<ol>) inside the nav【61†L84-L92】.
	•	BreadcrumbItem: A list item (<li>). Use one per “crumb”.
	•	BreadcrumbLink: An anchor (<a>) styled as a breadcrumb link. Use for all but the current page.
	•	BreadcrumbPage: A span or text for the current page (not a link).
	•	BreadcrumbSeparator: A separator icon or text (like “>” or “/”) between items.
	•	BreadcrumbEllipsis: An ellipsis item for truncated crumbs (if you choose to collapse middle items).

Example:

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbSeparator />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbSeparator />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

This produces: Home › Docs › Components
Where “Home” and “Docs” are clickable, and “Components” is the current page.

In the docs snippet, they inserted <BreadcrumbSeparator /> as its own item. However, you could also include the separator in the same list item or via CSS. The above shows each separator in its own <BreadcrumbItem> for clarity. Another approach:

<Breadcrumb>
  <BreadcrumbList className="flex items-center">
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbSeparator />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
      <BreadcrumbSeparator />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

This wraps each crumb and separator together in one <li>. Ensure to add some spacing (the component already has gap classes on the list).

Styles:
	•	The breadcrumb text is small (text-sm)【61†L90-L97】.
	•	There’s a gap between items (in CSS, .gap-1.5 sm:gap-2.5 on the list)【61†L88-L96】.
	•	BreadcrumbSeparator by default renders a chevron icon (using Lucide’s ChevronRight)【61†L53-L61】. You can override by passing children: <BreadcrumbSeparator>/</BreadcrumbSeparator> would use “/” instead.
	•	BreadcrumbEllipsis likely renders a … or a specific icon (MoreHorizontal from Lucide)【61†L53-L61】. Use it like a link if you want clicking it to show hidden crumbs (that logic you’d implement).

Notes:
	•	Include aria-label="breadcrumb" on the <Breadcrumb> (the component does that for you)【61†L69-L72】.
	•	Use BreadcrumbPage for the current page to remove link styling and possibly add aria-current="page" (the component might do that internally).
	•	If your breadcrumb list is long and you want to truncate, you could manually decide to show first, ellipsis, last. For example:

<BreadcrumbItem>
  <BreadcrumbLink href="/">Home</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbSeparator />
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbSeparator />
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbLink href="/docs/category">Category</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbSeparator />
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbPage>Current Page</BreadcrumbPage>
</BreadcrumbItem>

The ellipsis in the middle could be styled differently (maybe have a tooltip or clickable to expand the hidden parts).

	•	In terms of SEO, breadcrumb links are fine. An ordered list is semantic for breadcrumbs.
	•	The component styling ensures wrapping if it doesn’t fit (they use flex-wrap on the list)【61†L88-L96】. So on mobile, long breadcrumbs will wrap to next line.

Button

Description:
Buttons trigger actions when clicked. The Button component comes with several variants (styles) and sizes. By default, NeoBrutalism buttons have a bold look with drop shadows and translate effect on hover, emulating a “push” or “lift” interaction.

Import:

import { Button } from "@/components/ui/button";

Props:
	•	variant: Controls the color and shadow style.
	•	"default" – Primary style: main color background, black border, dropshadow, and “press” effect on hover【16†L73-L81】.
	•	"noShadow" – Same as default but without shadow (no translate on hover)【16†L75-L78】.
	•	"neutral" – White/neutral background, black text, still with shadow and hover effect【16†L79-L87】.
	•	"reverse" – Main color background but opposite hover effect: it moves in the opposite direction and shows shadow on hover【16†L85-L88】 (gives impression of reversing the shadow).
	•	Default variant is “default”.
	•	size: Controls padding and height.
	•	"default" – Height 2.5rem (40px), horizontal padding 1rem.
	•	"sm" – Smaller: height 2.25rem (36px), padding ~0.75rem【16†L92-L100】.
	•	"lg" – Larger: height 2.75rem (44px), padding ~2rem.
	•	"icon" – Circular: height & width 2.5rem (40px) for icon-only button【16†L96-L100】.
	•	Default size is “default”.
	•	Other props: All standard <button> props (type, disabled, onClick, etc.), plus className to override or extend styles.
	•	asChild: If true, renders no wrapper but expects a single child (e.g., an <a>), transferring the styling to it. Useful to style links as buttons.

Example Usage:

<Button>Default</Button>
<Button variant="noShadow">No Shadow</Button>
<Button variant="neutral">Neutral</Button>
<Button variant="reverse">Reverse</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Settings">
  <SettingsIcon />
</Button>

{/* Using asChild to style a link as a button */}
<Button asChild variant="default">
  <a href="/signup">Sign up</a>
</Button>

Key styling behaviors:
	•	All buttons have inline-flex items-center justify-center so they can contain icons and text. They also have gap-2 so an icon and text will have 0.5rem spacing【15†L61-L69】.
	•	disabled prop greys out and makes non-interactive (opacity-50 cursor-not-allowed).
	•	Focus state: there’s a focus-visible outline (2px black ring with white offset) for accessibility【15†L61-L69】.
	•	Hover effects:
	•	Default & Neutral: on hover, the button translates by 4px (down/right) and shadow is removed【16†L73-L82】【16†L79-L87】. This looks like the button is being pressed (the shadow “stays behind”).
	•	Reverse: on hover, it adds a shadow and translates in reverse (-4px -4px) which looks like it lifts up to reveal a shadow behind it【16†L85-L88】.
	•	NoShadow: no hover effect defined in style (so it will just maybe darken if using CSS, but none by default).
	•	Neutral variant uses bg-bw text-text, meaning white bg, black text on light mode, and in dark mode it flips (dark bg, light text)【16†L79-L87】. So it’s suitable as a secondary button that always contrasts with page background.
	•	The class names use design tokens like translate-x-boxShadowX (4px) to implement that offset.

Notes:
	•	Icons: If using an icon inside a Button without text, use size="icon" so it’s a circle. If using icon with text, no special size needed (just include the icon).
	•	The component uses Slot from Radix to support asChild, meaning the child element (like <a>) will behave like the button (click events propagate, etc.).
	•	If you need a link styled as a button in markup (for SEO or routing reasons), using asChild is ideal as above. Alternatively, you could add classes to an <a> manually, but then you replicate styles.
	•	To override styling: you can pass className. The utility cn merges it. If you want a custom color not in variants, simplest is className="bg-red-500 hover:bg-red-600" etc.
	•	Combining variants and size: The component supports it; e.g., <Button variant="neutral" size="sm"> works.
	•	If you want a truly flat style (no border, no shadow), use noShadow and also override border: e.g., <Button variant="noShadow" className="border-0">Text</Button>.
	•	Buttons (especially default variant) use the main color for background (bg-main) so if you retheme --main, all default buttons change color.
	•	Accessibility: Button is a <button> so it’s focusable by default and accessible. If using asChild with <a>, ensure the href is present so it’s focusable.
	•	The library’s Button is not automatically a submit button. If you need a submit, add type="submit" (or wrap in a form where default type=submit).
	•	There’s no loading state built-in; implement that by e.g. disabling and changing content to a spinner or “Loading…”.
	•	Border radius: uses rounded-base which is 5px by default (from CSS var). If you want pill shape for a button, add rounded-full via className or change base radius in theme.

Calendar

Description:
A calendar component that displays a month grid of days and allows date selection. Usually used within a Date Picker or for scheduling interfaces. Under the hood, it uses react-day-picker to render the calendar.

Import:

import { Calendar } from "@/components/ui/calendar";

Props:
	•	Accepts all props of react-day-picker’s <DayPicker> component (these are merged via CalendarProps)【40†L71-L79】.
	•	Common props:
	•	mode: "single", "multiple", or "range" – selection mode.
	•	selected: the controlled selected date(s).
	•	onSelect: callback when selection changes.
	•	disabled: dates to disable (e.g., { before: new Date() } to disable past).
	•	toMonth, fromMonth: to restrict navigation.
	•	showOutsideDays: whether days from adjacent months are shown (the component default is true)【40†L77-L85】.
	•	etc. (see react-day-picker docs).
	•	The Calendar component already injects certain class names to DayPicker’s internal elements for styling:
	•	It sets up navigation icons (using lucide ChevronLeft/Right)【40†L59-L67】.
	•	Defines classNames for elements like nav_button, day, day_selected, etc., with brutalist styles (the code snippet shows usage of buttonVariants for nav buttons, and background classes for the calendar days)【40†L93-L101】【40†L112-L120】.

Usage Example:

const [date, setDate] = useState<Date | undefined>();

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>

This displays an interactive calendar. The user can click a day to select it (which updates state via onSelect). By default, it shows the current month.

To customize:

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  initialFocus  // focus the calendar for accessibility if used in a popover
  defaultMonth={new Date(2025, 0)}  // start on Jan 2025
/>

Styles:
	•	The calendar outer element has background bg-main, text text-mtext, border border-2 border-border, and shadow-shadow for the drop shadow【40†L91-L99】.
	•	Days are likely styled with Tailwind classes via classNames prop. Although not fully shown in snippet, typically:
	•	Current day, selected day, disabled days, etc., get specific classes (the library might provide a default).
	•	E.g., selected day might be bg-black text-white or something for contrast.
	•	The nav buttons (prev/next arrows) are styled as small icon buttons without shadow【40†L112-L120】 and positioned at the sides of the calendar caption (the code uses absolute left-1 and right-1 classes on them)【40†L114-L122】.
	•	Typography: month name and weekdays likely have specific fonts (maybe font-heading for month name? Not sure; but caption_label is text-sm【40†L107-L115】).
	•	If you click a day, react-day-picker will add e.g. aria-selected="true" to it and the style defined via className will apply (the component might define .bg-main text-mtext for selected or vice versa).

Notes:
	•	Dependencies: Ensure you’ve installed react-day-picker (v8). The component code imports DayPicker from “react-day-picker”【40†L61-L68】.
	•	The Calendar component does not include an input field or popover by itself – it’s just the calendar grid. For a date picker with input, see the Date Picker section, which uses Calendar inside a Popover.
	•	Localization: By default, DayPicker is English. To localize, you’ll need to supply locale prop and possibly weekStartsOn etc. The component itself doesn’t override those, so you can pass them as props.
	•	Range and Multiple: The usage for multiple selection or range selection would involve selected as an array or as a { from: Date; to: Date; } for range. OnSelect will pass selection accordingly. The styles for range (like highlighting between dates) might require additional classNames.
	•	The classNames prop in DayPicker can be used to override any internal class. The NeoBrutalism Calendar likely already provides a classNames object (the code snippet shows a partial classNames={{ nav_button: ..., nav_button_previous: ..., ... }})【40†L112-L120】.
If you need to adjust (e.g., change how selected day looks), you might have to customize the component code or override with global CSS targeting .rdp-day_selected etc.
	•	Accessibility: Calendar grid is accessible via keyboard (arrow keys navigate days, etc.), courtesy of react-day-picker. The initialFocus prop (or focusing the calendar when opened) is useful so keyboard users don’t have to tab through a bunch of controls to get into the grid.
	•	You can hide the month navigation by setting showNavigation={false} or limit navigation by fromDate/toDate.
	•	If you want to display multiple months side by side, use numberOfMonths={2} (the component styling might handle that via the months: "flex ..." class).
	•	The calendar is not a controlled component by default for navigation, but you can manage month or onMonthChange if needed.

Card

Description:
A Card is a container with a white or colored background, padding, and an optional drop shadow and border, used to group content. Commonly used for dashboard widgets, blog post previews, form sections, etc.

Import:

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";

Structure & Props:
	•	<Card>: Outer container.
	•	It’s a <div> with rounded-base, border-2 border-border, background bg-main, text text-mtext, and shadow-shadow (drop shadow)【67†L75-L83】.
	•	Accepts className to override (e.g., use bg-bw text-text if you want a white card).
	•	<CardHeader>: A container (div) for the header section of the card.
	•	By default p-6 (padding 1.5rem) and vertical spacing between elements (flex flex-col space-y-1.5)【67†L100-L108】.
	•	<CardTitle>: A heading for the card.
	•	It’s rendered as a <div> (you might consider it an <h3> semantically) with text-lg font-heading or similar (the code shows leading-none tracking-tight as well)【44†L125-L133】.
	•	Use this for the main title of content.
	•	<CardDescription>: Supporting text for the header (subheading).
	•	Smaller text (likely text-sm text-muted perhaps), helps describe the card.
	•	In code, it’s a <div> with text-sm and a lighter color style (font-base with maybe grey)【44†L147-L155】.
	•	<CardContent>: Main content area.
	•	A div container usually with padding. In code, CardContent might have p-6 or maybe no default padding to let inner content control it.
	•	Use it to wrap the bulk of card content (text, form, images, etc.).
	•	<CardFooter>: Bottom area for actions or summary.
	•	A div container that defaults to flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 in shadcn design【103†L189-L197】 (that ensures in mobile it stacks, on desktop it aligns buttons to right).
	•	In NeoBrutalism code snippet, they gave an example overriding it with justify-between【110†L313-L321】.
	•	Use it for buttons or secondary info at bottom.

Example:

<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Profile</CardTitle>
    <CardDescription>Update your personal information</CardDescription>
  </CardHeader>
  <CardContent>
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="email@example.com" />
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-end space-x-2">
    <Button variant="noShadow">Cancel</Button>
    <Button variant="default">Save</Button>
  </CardFooter>
</Card>

This card has a header with title and description, a content area with a form (two fields), and a footer with two buttons aligned to the right.

By default, the card background is the main theme color (light blue). If you want a plain white card:

<Card className="bg-bw text-text">
  ... content ...
</Card>

bg-bw text-text will yield white background, black text (and in dark mode, dark background, light text).

Notes:
	•	Cards are often used in grids. They have shadow-shadow which is a small offset shadow to separate from background. If placing on a similarly colored background, consider adding className="shadow-none" to flatten.
	•	The card border is black, which is a bold look. If you want a softer look, you could remove border (border-0) or change border CSS variable to a lighter color for cards.
	•	CardHeader, CardContent, CardFooter all have default padding (CardHeader and Footer often have p-6, CardContent might have p-6 or p-4). In usage above, we didn’t add extra padding to CardContent, assuming the default exists. If content feels too snug, wrap in a class with padding or ensure CardContent has padding via className.
	•	You can omit any of the subcomponents:
	•	For a simple card with only content: just use <Card><CardContent>....
	•	For a card that’s just an image: you might not use header or footer.
	•	If Card is used as an interactive element (e.g., clickable card), you might add role="button" and tabIndex={0} or simply wrap contents in an <a>. There’s no built-in “CardButton” variant, so you’d handle that manually (and maybe remove shadow on hover or so via custom CSS).
	•	Accessibility: Card is a div container. Ensure that heading levels in CardTitle fit the document structure (if CardTitle is a significant heading, consider rendering it as an <h2> or so in your markup or via styling).
	•	The CardTitle uses the “heading” font weight (700) and presumably font-heading family if set. CardDescription uses base weight (500) with maybe a muted color (the code sets [&_p]:leading-relaxed and such for AlertDescription; CardDescription might be similar style).
	•	If you put interactive elements inside CardContent (like inputs, links), they work normally.
	•	CardFooter default in code is flex-col-reverse on mobile to stack actions with the primary action last (so on mobile the primary action appears at bottom, on desktop to the right). In example we overrode to flex-row justify-end explicitly.
	•	If your Card is purely presentational (e.g., showing data), it’s fine. If it’s a landmark (like a main section on a page), consider adding appropriate landmark roles or headings.

Carousel

Description:
Carousel displays a horizontal (or vertical) scrollable list of items, with controls to navigate. Often used for image sliders, card sliders, etc. The NeoBrutalism carousel provides context and controls around the Embla carousel library, making it easy to implement.

Import:

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

Props:
	•	<Carousel>: The main wrapper (provides context).
	•	orientation: "horizontal" (default) or "vertical" to set scroll direction【71†L87-L95】.
	•	opts: Options for Embla carousel (e.g., { loop: true } for infinite loop).
	•	plugins: Embla plugins (e.g., for auto-play or parallax, if any).
	•	className: Typically used to set width or styling for the carousel container.
	•	The Carousel is a flex container that will contain CarouselContent and the Prev/Next, but styling wise it’s relatively positioned maybe for controls.
	•	<CarouselContent>: Acts as the viewport/track for the slides.
	•	Likely has overflow-hidden and display: flex to line up CarouselItem.
	•	Use className to set height or other track-specific styles.
	•	<CarouselItem>: A wrapper for each slide item.
	•	It’s a flex item (flex-none) sized to the width of the container (or custom width).
	•	You put your actual content inside (e.g., an image or card).
	•	className can adjust padding or width.
	•	<CarouselPrevious> / <CarouselNext>: Buttons to navigate slides.
	•	Render an arrow icon by default (in docs likely using lucide ArrowLeft/ArrowRight or chevrons).
	•	They are automatically disabled when you can’t scroll further (context provides canScrollPrev/Next).
	•	They accept className (for positioning or styling overrides) and button props.
	•	Likely placed as siblings to CarouselContent inside Carousel.

Usage Example:

// Assuming we have an array of image URLs
<Carousel className="relative w-full max-w-xl">
  <CarouselContent className="flex">
    {images.map((src, idx) => (
      <CarouselItem key={idx} className="relative w-full">
        <img src={src} alt={`Slide ${idx + 1}`} className="block w-full h-auto" />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 bg-bw text-text p-2 rounded-full">
    <span className="sr-only">Previous</span>
  </CarouselPrevious>
  <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 bg-bw text-text p-2 rounded-full">
    <span className="sr-only">Next</span>
  </CarouselNext>
</Carousel>

This sets up a basic image carousel. The Prev/Next buttons are absolutely positioned over the carousel (adjust as needed), with styling (white background, black icon, circular). The actual icons for Prev/Next are likely embedded by the component (the code might put a ChevronLeft icon inside CarouselPrevious by default). If not, we can include children. For example, if CarouselPrevious is just a button, we might do:

<CarouselPrevious>
  <ChevronLeft className="h-4 w-4" />
  <span className="sr-only">Previous</span>
</CarouselPrevious>

If the component already includes icon, just adding sr-only text as child is fine.

Notes:
	•	The Carousel uses Embla under the hood (Embla API accessible via setApi prop if needed).
	•	The content of CarouselItem can be anything, but you need to manage its width. In example, className="relative w-full" on CarouselItem means each slide is 100% width of the Carousel container (so one slide shown at a time).
If you wanted to show multiple slides at once, you could set a different width (e.g., w-1/2 for two slides visible).
	•	Controls: If you want dots indicators, you could use the Embla API via setApi to get api.selectedScrollSnap() and build your own dot components. None are provided out of box.
	•	The Prev/Next components have internal logic for disabled state:
	•	When at start, Prev is disabled (likely with disabled:opacity-50 style).
	•	When at end, Next disabled.
	•	If loop: true in opts, then disabled state might never trigger (because it’s circular).
	•	Add draggable="false" on images or heavy content in slides if you find dragging selects content. Embla handles pointer events though, so likely fine.
	•	If vertical orientation, you’d also likely adjust the Prev/Next to Up/Down arrows and place them top and bottom.
	•	Styling: The default style of Carousel might not add much besides overflow hidden. The snippet from context suggests it uses context, but styling is mostly up to className you provide.
	•	The component ensures CarouselContent and CarouselItem interplay:
	•	Probably CarouselContent has overflow-hidden and maybe touch-action: pan-y or x depending orientation to allow swiping only in intended direction.
	•	CarouselItem has flex-shrink-0 so they don’t shrink.
	•	Accessibility: Carousels are tricky. Embla does not add roles by itself. The NeoBrutalism component might not add them either. For better accessibility:
	•	Wrap Carousel in a region with aria-label describing content (or use an aria-roledescription="carousel").
	•	The Prev/Next buttons have sr-only text above to label them.
	•	If slides have interactive content, ensure keyboard users can tab through them. Embla by default doesn’t trap focus, which is good (the slide content is just in normal DOM order).
	•	There’s no pausing auto-rotate (since no auto-play by default), so that’s fine.
	•	If using heavy content, Embla’s performance is good, but consider not too many slides at once in DOM if possible (maybe use virtualization or lazy loading images).
	•	Embla plugin integration: e.g., you could plug in autoplay. Use plugins={[Autoplay()]} if you imported an Autoplay plugin. The component passes it through.

Checkbox

Description:
A checkbox component for forms, allowing binary checked/unchecked or an indeterminate state. Styled as a small box with a checkmark when checked.

Import:

import { Checkbox } from "@/components/ui/checkbox";

Props:
	•	It uses Radix Checkbox under the hood, so:
	•	checked: boolean or "indeterminate" for controlled state.
	•	defaultChecked: boolean for uncontrolled.
	•	onCheckedChange: callback when state changes (checked or unchecked).
	•	Other props: you can use disabled, etc. It extends HTMLInput attributes but implemented as a custom element.
	•	id: use with a <Label> to pair label.
	•	There’s no variant or size prop; it’s a fixed size (16px).
	•	The Checkbox component itself is a combination of a Root and an Indicator:
	•	If checked, an SVG check icon is shown inside.

Usage Example:

<Checkbox id="accept" checked={accepted} onCheckedChange={setAccepted} />
<Label htmlFor="accept" className="ml-2">Accept terms and conditions</Label>

This will render a small square checkbox. The label is clickable and tied via htmlFor.

Without controlled state:

<Checkbox id="news" defaultChecked />
<Label htmlFor="news" className="ml-2">Subscribe to newsletter</Label>

This defaultChecked will render initially checked.

Indeterminate state:

<Checkbox checked="indeterminate" onCheckedChange={...} />

will show a horizontal line or some icon (depending on Radix’s default, might show a minus icon if provided or just as a css state).

Styling & Classes:
	•	The checkbox is h-4 w-4 and has peer class applied (Radix uses a separate hidden input? In this code, they use peer presumably for styling adjacent label).
	•	It has outline outline-2 outline-border making the outline/border of checkbox black【79†L71-L79】.
	•	When checked, it adds bg-main text-white to itself (so box becomes colored, and check icon (which is placed inside with text-current) gets white color)【79†L73-L76】.
	•	Actually, they set data-[state=checked]:bg-main data-[state=checked]:text-white on the Checkbox root. And the Indicator has <Check color="black" className="h-4 w-4" />【79†L93-L96】, but since the indicator is nested inside the checkbox root, its text-current could be manipulated. The code explicitly sets color black for Check icon, which means on blue background, check is black. If you want the typical white check on blue, you could change that in code to rely on text-current and let the root’s text-white apply.
	•	Focus: likely has focus styles similar to Button (maybe not explicitly given in snippet, but Radix might handle, or they might rely on outline and ring classes).
	•	There is peer usage: If you have a label with class peer-checked:..., but since they have a Label component, you likely won’t need that directly.

Notes:
	•	Always pair with a <Label> for accessibility (the Label component from this library sets htmlFor).
	•	If making a custom UI where the label is not next to it (like a list of checkboxes), ensure to still link via id.
	•	The Checkbox is essentially headless; you style it by CSS states:
	•	data-state="checked" when checked, data-state="indeterminate" when indeterminate.
	•	data-state="unchecked" otherwise.
	•	data-disabled when disabled.
	•	To style indeterminate differently (maybe a minus icon), you’d have to adjust the component to render different indicator when state is indeterminate. Radix by default uses the same Indicator slot (you could check for props.checked === 'indeterminate' and render a different icon).
	•	If you have many checkboxes in a custom list, consider roving tab index or arrow key nav if it’s meant to act like a checklist (but usually checkboxes in forms are individually focusable).
	•	You can add text or element inside the Checkbox as children if you want custom indicator, but typically you use the provided Check icon (which is already there).
	•	If you want a larger clickable area, wrap checkbox and label in a container and add padding to label or use onClick on container toggling state.
	•	Disabled: Add disabled prop; the styling (disabled:cursor-not-allowed opacity-50) is applied by the component classes【79†L73-L76】. It will also prevent state changes.
	•	On state change, onCheckedChange gives true/false or indeterminate if toggled to that. For controlled, manage state accordingly.
	•	If using inside a form without JS, note it won’t post to server by default because it’s not an actual input element. Radix’s Checkbox is a div with role=checkbox. If you need to submit values, either track state in a hidden input or use a real <input type="checkbox"> with visually hidden styling instead. For client-side apps this isn’t an issue.

Collapsible

Description:
Collapsible is a simple show/hide container for content, toggled by a trigger. Unlike Accordion (which manages multiple items), Collapsible is just one toggle section.

Import:

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "@/components/ui/collapsible";

Props & Usage:
	•	<Collapsible>: Wrapper controlling state.
	•	open: boolean for controlled state.
	•	defaultOpen: boolean initial state (uncontrolled).
	•	onOpenChange: callback when opened/closed.
	•	It must wrap the CollapsibleTrigger and CollapsibleContent.
	•	<CollapsibleTrigger>: The element that toggles the collapse.
	•	By default, it’s a <button> (Radix Collapsible.Trigger).
	•	You can put text like “Toggle” or an icon as children.
	•	Or use asChild to embed a custom element (like wrapping a <Button>).
	•	<CollapsibleContent>: The collapsible content.
	•	It’s hidden when Collapsible is closed, shown when open (Radix handles the animation if CSS applied).
	•	Contains the content you want to reveal.

Example:

const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen} className="w-64">
  <div className="flex items-center justify-between border-2 border-border bg-main p-4 rounded-base">
    <h4 className="text-sm font-heading m-0">Details</h4>
    <CollapsibleTrigger asChild>
      <Button variant="noShadow" size="sm" className="w-9 bg-bw text-text p-0">
        <ChevronsUpDown className="h-4 w-4" aria-hidden />
        <span className="sr-only">{open ? 'Collapse' : 'Expand'}</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="mt-2 space-y-2">
    <div className="border-2 border-border bg-main p-3 rounded-base font-mono text-sm">
      Item 1: Radix UI Primitives
    </div>
    <div className="border-2 border-border bg-main p-3 rounded-base font-mono text-sm">
      Item 2: Stitches for styling
    </div>
  </CollapsibleContent>
</Collapsible>

In this example, we have a header section with a title “Details” and a toggle button (chevron icon). When clicked, it toggles open. The content reveals two items. The visual style here matches the example from docs (with pseudo-content about starred repos)【81†L95-L103】【82†L133-L141】.

Styling:
	•	The trigger button is small with chevron icon flipping (we manually manage flip by maybe rotating in CSS when [data-state=open], but we didn’t here; Radix Collapsible doesn’t auto-rotate icons like Accordion).
	•	The content slides down (Radix Collapsible by default instantly hides/shows, but the docs CSS might include a transition).
	•	The container and items are given outlines (border-border) and same background as theme for consistency.

Notes:
	•	The Collapsible is basically an uncontrolled Accordion of one item. Use it when you just need a simple toggle.
	•	Typically you’ll include CollapsibleTrigger visibly as part of the content (like a “Show more” link or an icon button).
	•	className on CollapsibleContent is applied to the content wrapper (which Radix sets to display: none or so when closed).
	•	For animation: You can add CSS to CollapsibleContent:

[data-state="open"] { animation: slideDown 0.3s ease-out; }
[data-state="closed"] { animation: slideUp 0.3s ease-in; }
@keyframes slideDown { ... }
@keyframes slideUp { ... }

Or use Radix’s Animation present in their examples. The NeoBrutalism example didn’t explicitly show animation classes, so by default it may just appear/disappear.

	•	If controlling via state (like the example with open), ensure to set onOpenChange to update state.
	•	If using uncontrolled (just defaultOpen and internal state), clicking trigger toggles automatically.
	•	You can have multiple triggers controlling one content if needed (though not common).
	•	Indeterminate state not applicable here; it’s just open or closed.
	•	Accessibility: CollapsibleTrigger is a button with aria-expanded and aria-controls linking to CollapsibleContent. CollapsibleContent has role="region" and aria-hidden appropriately. Radix handles those.
	•	Good use-case: lengthy text preview with “Read more”. Put truncated text outside Collapsible, full text inside CollapsibleContent, and a “Read more/less” trigger.
	•	Another use-case: Filter sections in a sidebar that can expand collapse.

Combobox

Description:
Combobox is not a single component export in this library, but a pattern built using others (Command, Popover, Input, etc.). It provides an autocomplete/select dropdown where the user can type to filter options and select one.

How to Implement: The NeoBrutalism docs show a ComboboxDemo example using:
	•	Popover for the dropdown container.
	•	Button as the trigger (styled to look like an input).
	•	Command (with CommandInput, CommandList, CommandItem) to handle search and list.
	•	Icons from Lucide (ChevronsUpDown for indicator, Check for selected mark).

Refer to the Combobox example under Command (Command Menu / Palette) and Date Picker for similar patterns.

Summary Example:
(This is a recap of the example from the user instructions above)

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' }
];
const [open, setOpen] = useState(false);
const [value, setValue] = useState("");

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button 
      variant="noShadow" 
      className="w-48 justify-between"
      role="combobox"
      aria-expanded={open}
      aria-label="Framework"
    >
      {value ? frameworks.find(f => f.value === value)?.label : "Select framework..."}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" aria-hidden />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-48 p-0 !border-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        {frameworks.map(fr => (
          <CommandItem
            key={fr.value}
            value={fr.value}
            onSelect={(val) => {
              setValue(val === value ? "" : val);
              setOpen(false);
            }}
          >
            <Check className={cn("mr-2 h-4 w-4", value === fr.value ? "opacity-100" : "opacity-0")} />
            {fr.label}
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>

This code:
	•	Uses a Button that displays the selected value or placeholder.
	•	The PopoverContent holds a Command palette:
	•	CommandInput for filtering.
	•	CommandItem for each option, which calls onSelect.
	•	A Check icon is shown for the selected item (via conditional opacity).
	•	The Popover opens/closes when the Button is clicked or an item is selected.

Notes:
	•	Ensure to include necessary imports: Command, CommandItem, CommandInput, CommandList, CommandEmpty from @/components/ui/command, and Popover components.
	•	cmdk (Command) will handle filtering automatically by CommandItem value.
	•	The trigger button uses role="combobox" and aria-expanded for accessibility, linking it conceptually to the list.
	•	If you want, you could add aria-activedescendant and IDs for CommandItem to fully comply with combobox pattern, but Radix Command+Popover isn’t fully ARIA combobox; it’s more like a menu.
	•	However, this approach is widely used (shadcn’s combobox example).
	•	If making it a part of a form, you can have a hidden input with name and the value state so it gets submitted.

The library didn’t provide a direct Combobox component, but following this pattern yields a combobox with neo-brutalist styling (the dropdown and items will inherit the brutalist look via Command which uses bg-main, etc., and the Button trigger which uses the theme classes).

Command (Command Menu / Palette)

Description:
The Command components provide a searchable list (command palette) UI, where users can type to filter a list of items and select one. It can be used for building custom selects, search menus, or in-app command palettes (like the Slack or VSCode command palette).

Import:

import {
  Command,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator
} from "@/components/ui/command";

Props & Usage:
	•	<Command>: Context wrapper for the command menu.
	•	Add className="relative overflow-hidden rounded-base" if needed for styling (the default from shadcn).
	•	Usually contains CommandInput and CommandList.
	•	<CommandInput>: The input field for search query.
	•	It’s an <input type="text"> under the hood.
	•	Props: placeholder, and it could accept value and onChange if controlling externally, but normally let Command handle it.
	•	It likely has an embedded search icon (in shadcn they show a Search icon inside the input via background or pseudoelement).
	•	<CommandList>: Container (like a <ul>) for command items.
	•	Contains CommandEmpty, CommandGroup, or CommandItem directly.
	•	<CommandEmpty>: A fallback displayed when no items match the query.
	•	Just put a message string as children (e.g., “No results found.”).
	•	<CommandGroup>: Optionally group items under a heading.
	•	Props: heading (string) for group label.
	•	Should contain one or more CommandItem inside.
	•	<CommandItem>: Represents a selectable item in the list.
	•	Props:
	•	value: The string used for filtering matching. If not provided, it might use children text.
	•	onSelect: callback when this item is selected (via click or Enter key).
	•	By default, it’s a <div role="option"> with appropriate attributes. It is focusable via arrow keys.
	•	Children: You can put any JSX. Commonly text and an icon (like a Check when selected, or an action icon).
	•	<CommandSeparator>: A divider line between items or groups.

Example (in a standalone command palette usage):

<Command className="w-80">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="File">
      <CommandItem onSelect={() => openFile()}>
        <FileIcon className="mr-2 h-4 w-4" />
        Open File...
      </CommandItem>
      <CommandItem onSelect={() => saveFile()}>
        <SaveIcon className="mr-2 h-4 w-4" />
        Save File
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Edit">
      <CommandItem onSelect={() => undo()}>
        <UndoIcon className="mr-2 h-4 w-4" />
        Undo
      </CommandItem>
      <CommandItem onSelect={() => redo()}>
        <RedoIcon className="mr-2 h-4 w-4" />
        Redo
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

This creates a command menu with sections “File” and “Edit”. Typing filters through “Open File”, “Save File”, “Undo”, “Redo”. Selecting triggers the respective functions.

Notes:
	•	Filtering: CommandInput automatically filters CommandItem by comparing the input text with each CommandItem’s value. The filtering is fuzzy by default (cmdk uses Fuse.js internally). E.g., typing “sf” might match “Save File”.
	•	Keyboard: Up/Down arrow keys navigate items, Enter selects, Esc could be used to clear or close if wrapped in Dialog/Popover.
	•	Focus: CommandInput is auto-focused by Radix when you open a CommandDialog or such. If using standalone, you may call input focus manually.
	•	Icons and Shortcut text: You can include additional elements in CommandItem (like we did with FileIcon). If you want to display a shortcut (like we did in ContextMenu using ContextMenuShortcut), you could simply place a <span className="ml-auto text-xs text-muted-foreground">Ctrl+S</span> in CommandItem to align it to right (by adding justify-between to CommandItem or to parent flex).
	•	Styling:
	•	The Command itself often has bg-popover text-popover-foreground in shadcn (which in our context would be bg-main text-mtext, if they map popover->main).
	•	Each CommandItem is styled as a list option: likely px-2 py-1.5 cursor-pointer rounded and a focus style (bg-main perhaps on focus or highlight).
	•	You might see classes like data-[selected] or aria-selected in the underlying implementation to style the active item.
	•	The group heading is styled maybe with a different color or uppercase small text.
	•	Combobox vs Command: If used as an inline dropdown (combobox), you’ll likely wrap Command inside a PopoverContent (as done above in Combobox example).
	•	Dialog: If you want a global command palette overlay, you can use Dialog with Command inside, or use CommandDialog if provided. The Shadcn version often provides a CommandDialog component that wraps Command in a Dialog (see code snippet: they define CommandDialog that uses DialogContent with some special styling【90†L81-L89】). In NeoBrutalism, if not given, you can do:

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="p-0 overflow-hidden">
    <Command>
      ... as above ...
    </Command>
  </DialogContent>
</Dialog>

Possibly style it to appear larger and centered.

	•	Dependencies: cmdk library. The components are basically thin wrappers around <CommandPrimitive> from cmdk with some styles and Radix Dialog integration if needed【90†L57-L65】.
	•	If you want to manually trigger filter results (for remote data perhaps), you can control CommandInput by hooking into onValueChange event from cmdk (not directly a prop, but they do expose something like that via context).
	•	Usually, no need to manage focus of CommandItems; the library does it.
	•	Make sure to include onSelect on CommandItem, otherwise clicking or pressing Enter won’t do anything by default (except closing if wrapped in Dialog? Actually in combobox above, they closed popover onSelect).
	•	For multi-step commands (like a palette where selecting one command opens a sub-menu of commands), you might implement logic inside onSelect to swap out the CommandList or open another Command.

Context Menu

Description:
A Context Menu is a floating menu that appears upon a right-click or contextmenu event on a target element. It contains a list of actions or options related to that element. It is similar to a dropdown menu, but specifically for context (right-click) usage.

Import:

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuShortcut
} from "@/components/ui/context-menu";

Structure & Props:
	•	<ContextMenu>: Wrapper providing state. Usually no props used directly; wraps Trigger and Content.
	•	<ContextMenuTrigger>: The element that, when right-clicked, opens the menu.
	•	By default, it’s a <span> or so that listens for contextmenu events. Use asChild to attach it to an existing element.
	•	E.g., <ContextMenuTrigger asChild><div>Right click me</div></ContextMenuTrigger>.
	•	<ContextMenuContent>: The menu panel that shows the items.
	•	Props: className for width or styling, can specify side offset if needed (though context menu usually appears at cursor by Radix).
	•	Inside ContextMenuContent you put menu items:
	•	<ContextMenuItem>: A clickable item.
	•	Props: onSelect function for click, disabled to disable.
	•	inset: boolean; if true, adds left padding (for alignment when some items have icons and others don’t)【92†L91-L99】.
	•	Children: the item label, and optionally a ContextMenuShortcut or any icon.
	•	<ContextMenuSeparator>: A thin divider line.
	•	<ContextMenuLabel>: A non-interactive label for grouping items (e.g., a heading in the menu).
	•	Props: inset to align with inset items (gives same padding).
	•	<ContextMenuCheckboxItem>: A menu item that can be checked/unchecked.
	•	Props: checked, onCheckedChange similar to Checkbox.
	•	It will show a checkmark when checked (the component likely inserts a <CheckIcon> inside).
	•	<ContextMenuRadioGroup>: A container to group radio items.
	•	Props: value (selected value) and onValueChange.
	•	<ContextMenuRadioItem>: A menu item that behaves like a radio option.
	•	Props: value to identify it. Placed inside a RadioGroup.
	•	Shows a bullet or check when selected (library likely uses a dot, often via Lucide Circle icon).
	•	<ContextMenuSub>: Container for a submenu context.
	•	Inside it, use <ContextMenuSubTrigger> and <ContextMenuSubContent>.
	•	<ContextMenuSubTrigger>: An item that opens a submenu.
	•	Acts like a parent menu item but with an arrow indicating submenu.
	•	Props: same as ContextMenuItem plus inset if needed.
	•	<ContextMenuSubContent>: The submenu content panel, similar to ContextMenuContent, but appears to the side.
	•	It can contain the same items structure as Content.
	•	<ContextMenuShortcut>: A right-aligned hint text, typically used inside a ContextMenuItem (e.g., “⌘+T”).
	•	It is just a span with styling to push it to right (ml-auto text-xs text-muted maybe).

Usage Example:
The earlier provided example covers a complex context menu (like a browser context menu):

<ContextMenu>
  <ContextMenuTrigger asChild>
    <div className="w-[300px] h-[150px] flex items-center justify-center border border-dashed border-text text-sm">
      Right click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64 bg-main text-mtext rounded-base border-2 border-border p-1">
    <ContextMenuItem inset onSelect={() => console.log('Back')}>
      Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled onSelect={() => {}}>
      Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset onSelect={() => console.log('Reload')}>
      Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48 bg-main text-mtext rounded-base border-2 border-border p-1">
        <ContextMenuItem onSelect={() => console.log('Save Page As')}>
          Save Page As... <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log('Create Shortcut')}>
          Create Shortcut...
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log('Name Window')}>
          Name Window...
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onSelect={() => console.log('Developer Tools')}>
          Developer Tools
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
      Show Bookmarks Bar <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuLabel inset>People</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>

This creates:
	•	Right-click on the dashed box to show the menu.
	•	“Back”, “Forward”, “Reload” at top (Forward disabled).
	•	A submenu “More Tools” with items in a sub panel.
	•	A separator.
	•	Two checkbox items for toggling show/hide options.
	•	A separator.
	•	A radio group “People” with two options.

Notes:
	•	Icons: The component likely automatically injects icons:
	•	Checkmark for checked state of CheckboxItem (the code imports Lucide Check for that).
	•	A small circle or dot for RadioItem selected (Lucide Circle).
	•	A right arrow for SubTrigger (Lucide ChevronRight).
These were imported in context menu code【92†L53-L61】. Usually:
	•	CheckboxItem uses an <CheckIcon /> when checked (it likely appears before the item label or as background).
	•	RadioItem uses <CircleIcon /> for selected.
	•	SubTrigger likely appends <ChevronRight /> to indicate submenu.
The styling for these is in the classes:
	•	In the snippet, SubTrigger classes include focus:border-border data-[state=open]:border-border to highlight it when submenu open【92†L91-L99】.
	•	They also have &[_svg]:w-4 h-4 shrink-0 pointer-events-none to style the icons.
	•	The inset prop adds pl-8 to items (i.e., 2rem left padding) to align text with items that have icons (since icons occupy ~1.5rem + margin). If some items have icons (like checkmark for a checkbox) and others don’t, use inset on those without to keep alignment.
	•	If you want to explicitly put an icon in a menu item (like a UI icon next to label), just include it and possibly skip inset.
	•	Multiple ContextMenus: Usually one per trigger element. If you have a list of items each with their own context menu, you might have to render multiple ContextMenu components (or generate one dynamically on right-click depending on target).
	•	Positioning: Radix positions the Content near the cursor by default (the Portal and Content handle this). It also flips if near edge of viewport. The sideOffset or alignOffset can be passed to Content if needed.
	•	Closing: Clicking outside or selecting an item will close the menu automatically (Radix handles outside click and selection).
	•	Keyboard: Context menu can be opened via keyboard using the context menu key or Shift+F10 when the trigger is focused (Radix likely attaches onContextMenu, but might not handle keyboard open by default since it’s specifically contextmenu event). However, you can also programmatically open by controlling open prop on ContextMenu if needed. Once open, arrow keys navigate, Enter activates, Esc closes, etc. (similar to a dropdown).
	•	Accessibility:
	•	The trigger gets aria-haspopup="menu" automatically maybe. It’s not togglable by left click, so aria-expanded not needed (unless you allow left-click to open).
	•	Content has role="menu", items have role="menuitem", separators role="separator", label role="presentation" with inside text perhaps marked with role="presentation" too or just styled as disabled item.
	•	CheckboxItem and RadioItem have role="menuitemcheckbox and role="menuitemradio" along with aria-checked.
	•	RadioGroup likely sets role="group" and aria-label using the ContextMenuLabel text (if Label is present with inset, it might serve as a visual label, but for screen reader, might rely on that being read as just a menuitem that is not selectable? Ideally ContextMenuLabel could have role="none" or similar).
	•	The submenus use aria-haspopup="menu" on sub triggers and aria-expanded when open, and proper aria-owns or controls on sub content. Radix typically does that.
	•	Styling:
	•	The content background uses bg-main text-mtext in example, which is consistent with theme. That means the menu looks like a neo-brutalist panel too.
	•	Each item on hover or focus is likely styled e.g. bg-bw text-text (white background, black text) to highlight selection. Not shown above, but check the classes in component or test. We see in context menu code snippet classes like focus:border-border data-[state=open]:border-border for SubTrigger【92†L91-L99】, and likely focus:bg-bw on items.
	•	Because border is 2px and items have 2px border transparent by default, focusing might add border making them shift slightly; but likely the border on items is to show a focus ring. They might have left border highlight instead.
	•	The ContextMenuShortcut text is usually muted (maybe 0.8 opacity) and small, placed at end. In example, classes not directly shown, but presumably they style it via a specific class in CSS.
	•	The context menu components allow building very rich menus as seen. Use only what you need. If you don’t need submenus or checkboxes, you can ignore those components.

Date Picker

Description:
Date Picker is not a single component but an example combining Input/Trigger and Calendar (the component we described earlier) to allow users to pick a date from a calendar popover. The pattern usually is:
	•	A trigger (often an Input or Button with date text).
	•	A Popover or Dialog containing the Calendar component.
	•	When a date is selected, update the trigger text and close the popover.

Implementation via composition:
Use Popover and Calendar together, as in the docs example we saw:

Example: (from earlier documentation)

const [date, setDate] = useState<Date>();

<Popover>
  <PopoverTrigger asChild>
    <Button 
      variant="noShadow" 
      className={cn(
        "w-[280px] justify-start text-left",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4 text-mtext" />
      {date ? format(date, "PPP") : <span className="text-mtext">Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0 !border-0">
    <Calendar 
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </PopoverContent>
</Popover>

Key parts:
	•	Button trigger: Looks like an input field with an icon. It displays either the formatted date or a placeholder. It’s justify-start text-left to behave like a text input. If no date, they gave it a muted style (maybe a lighter gray text) to look like placeholder.
	•	Calendar: configured with mode="single". The state date holds the selected date (or undefined if none).
	•	Closing behavior: They did not explicitly close the popover on select. It means the popover stays open after a date is picked (some date pickers do that so user can confirm or pick multiple things). If you want it to close upon selection:
	•	You can control the Popover’s open state via a state variable; in onSelect, call setOpen(false).
	•	Or use PopoverClose component if the library had it (like a wrapper to close on certain action).
	•	Alternatively, convert to a Dialog instead of Popover if you’d have a “Confirm” button.
	•	format(date, “PPP”): using date-fns to format the date to a readable format (PPP might produce, e.g., “Jan 1, 2024”).

Notes:
	•	Link the input and calendar with accessibility if needed: e.g., aria-describedby telling user to pick a date. However, since our trigger is a button, when focused it should say “Pick a date, collapsed” and when expanded the Calendar is a separate widget (with focus).
	•	If you want the date picker to allow manual typing as well, you’d use an <Input> element as trigger and implement an onChange to parse date. That gets complex (and you’d lose the nice brutalist styling of button). The simpler approach is a non-editable field with only calendar selection, as in the example.
	•	The CalendarIcon is decorative if accompanied by text, so we could mark it aria-hidden (they didn’t in code above, but ideally).
	•	If the component is used in a form and you need to submit the selected date:
	•	You can store the date in state and on form submit, format or handle accordingly.
	•	Or keep a hidden input like <input type="hidden" name="date" value={date ? date.toISOString() : ""} /> to submit machine-readable date.
	•	Styling: The popover content has !border-0 p-0 to remove default padding and border, because the Calendar itself has a border. So the visible border is from Calendar (so it looks like one cohesive widget).
	•	The trigger button uses text-muted-foreground for placeholder. If text-muted-foreground isn’t defined in our theme explicitly, it likely maps to some color (maybe a gray, or in our case, they might not have defined it; but we can just style placeholder with an inline style if needed).
	•	The trigger width is fixed in example to 280px. You can adjust or make it full width by class.
	•	Range Selection: If you wanted a date range picker, you’d set mode="range" on Calendar, which then expects selected as { from?: Date; to?: Date }. You would then display either “Pick a date range” or the formatted range in the trigger. The onSelect would give either a single date (when picking start) or range object when completed, etc. Might need some logic to handle partial selection.

Data Table

Description:
The Data Table example uses the Table components along with TanStack Table for a fully featured table with sorting, filtering. This isn’t a single UI component, but an integration pattern. The docs show how to create a data table and likely provide Table UI components.

Import (Table components):

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption
} from "@/components/ui/table";

The Table components likely mimic basic HTML table structure but with styling:
	•	<Table>: a container (could be <div role="table"> or an actual <table>).
	•	<TableHeader>: wraps header rows (maybe <thead>).
	•	<TableBody>: wraps body rows (<tbody>).
	•	<TableRow>: a row (tr).
	•	<TableHead>: a header cell (th).
	•	<TableCell>: a body cell (td).
	•	<TableCaption>: a caption (maybe rendered as <caption> or a styled div at bottom).

Integration with TanStack Table (react-table):
	•	You define your columns with accessor keys and optionally cell renderers.
	•	You prepare a table instance with useReactTable.
	•	Then you map headerGroups to TableRow inside TableHeader, and rows to TableRow inside TableBody.

For brevity, here is a minimal usage example (not showing sorting, filtering UI):

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map(user => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          {user.active ? <Badge>Active</Badge> : <Badge variant="neutral">Inactive</Badge>}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableCaption>List of registered users.</TableCaption>
</Table>

This simple example maps an array of users to table rows. In a real data table:
	•	You would incorporate a search input to filter users.
	•	Possibly have sortable column headers: e.g., on click of TableHead, change sorting (maybe with a  icon to indicate sort).
	•	You could integrate a DropdownMenu in a TableCell for row actions (like an “Options” cell with a context menu or menu for each row).
	•	The docs likely illustrate using TanStack Table’s state for sorting and filtering.

Styling (likely):
	•	Table: likely has w-full border-collapse.
	•	TableHead (th) might have text-left font-heading text-sm and bottom border.
	•	TableCell (td) might have top border (to separate rows) and padding.
	•	Alternate row shading might not be automatic, but you can do TableRow with e.g. data-[state=selected] or custom classes if you implement selection.
	•	The example usage in docs likely covers customizing the TableHead to include sort icons using e.g.:

<TableHead onClick={toggleSort}>
  Name {sorting.column === 'name' && (sorting.desc ? <ArrowDownIcon/> : <ArrowUpIcon/>)}
</TableHead>


	•	They possibly provided a wrapper like DataTable in docs to hide some complexity, but from search results it seems they instruct how to do it manually or with TanStack adapter.

Best Practices for Data Table:
	•	Use useReactTable (TanStack Table v8).
	•	Keep state for sorting, filtering, and pass data and columns to it.
	•	Memoize data if needed for performance on large sets.
	•	The Table components are purely presentational, so any interactive aspect (sorting, etc.) you implement by wrapping content in interactive elements or handling onClick.

Dialog

Description:
Dialog is a modal dialog component for general-purpose dialogs (non-alert). Use it for forms or content that requires focus and blocking the rest of UI, but not necessarily an urgent action (that’s AlertDialog’s use case).

Import:

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

Props & Subcomponents:
	•	<Dialog>: Root component controlling the open state.
	•	open (boolean) and onOpenChange for controlled usage.
	•	Typically you’ll use <DialogTrigger> to handle toggling, so you may not need to pass props.
	•	<DialogTrigger>: An element that opens the dialog on click.
	•	As with others, asChild can be used to attach to an existing element (like a Button).
	•	<DialogContent>: The dialog overlay and content container.
	•	This includes the modal itself. It likely wraps the content in a portal, with an overlay background behind.
	•	Props: probably className (e.g., width or max-w).
	•	By default, it might have styles: fixed inset-0 z-50 flex items-center justify-center for centering, and an overlay as part of it or separate element (maybe they use DialogOverlay internally).
	•	<DialogHeader>: A container for header section, often simply a wrapper for Title and Description. Probably has styling for spacing.
	•	<DialogTitle>: The title text (like an h2). It’s likely rendered as an <h2> with style text-lg font-heading.
	•	<DialogDescription>: Additional text, rendered likely as <p> with text-sm text-muted.
	•	<DialogFooter>: Container for actions (buttons) at bottom, maybe right-aligned by default (like flex justify-end space-x-2).
	•	<DialogClose>: A button to close the dialog.
	•	Usually an icon button (like an X icon) that goes in top-right of content or as a “Cancel” in footer.
	•	You can use it as <DialogClose asChild><Button>Cancel</Button></DialogClose> to wrap a Button that closes the dialog when clicked. Or if not specified, it might render a basic button.

Example:

<Dialog>
  <DialogTrigger asChild>
    <Button variant="default">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-lg bg-main text-mtext border-2 border-border p-6 rounded-base">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
    </DialogHeader>
    <form className="space-y-4 mt-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Alice" />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@alice" />
      </div>
    </form>
    <DialogFooter className="mt-6">
      <DialogClose asChild>
        <Button variant="noShadow">Cancel</Button>
      </DialogClose>
      <Button variant="default" onClick={() => {/* save action */}}>Save</Button>
    </DialogFooter>
    <DialogClose asChild>
      <Button variant="noShadow" className="absolute top-4 right-4 rounded-full p-2" aria-label="Close">
        <XIcon className="h-4 w-4" />
      </Button>
    </DialogClose>
  </DialogContent>
</Dialog>

This creates a dialog:
	•	Trigger: “Edit Profile” button.
	•	Content: Title “Edit Profile”, description, a form with two fields, and actions Cancel/Save.
	•	We included two DialogClose:
	•	One around the “Cancel” button, so clicking it closes the dialog.
	•	One as an icon button (X) in top-right for closing as well.
	•	The content styling: we used classes to give background, border, padding. Possibly the component already has some default, but adding ensures consistent brutalist look.

Notes:
	•	The overlay background might be included as a sibling to content. In AlertDialog, they had an Overlay component styling (bg-overlay etc.)【24†L79-L87】. For Dialog, they probably do similar:
	•	Possibly DialogContent includes DialogOverlay internally, or they export DialogOverlay as well. The snippet from the search shows DialogPrimitive.Overlay usage【107†L85-L93】 which is forwarded as DrawerOverlay in Drawer. For Dialog, might be similar.
	•	If the overlay is internal, no need to handle it. If not, check if there’s a <DialogOverlay> exported (not listed, maybe it’s internal).
	•	Focus trap: Radix Dialog traps focus inside, and focuses the first focusable element (or the DialogContent if none). In example, we might want to autofocus the first input, but we can simply rely on user tabbing to it.
	•	DialogClose when used, will automatically close the dialog on click (Radix handles it).
	•	If you want to handle Save and then close, just call setOpen(false) or wrap Save with DialogClose as well (but often you want to validate first).
	•	Dialog can be controlled:

const [open, setOpen] = useState(false);
<Dialog open={open} onOpenChange={setOpen}>...</Dialog>

Then you can open via some effect or any custom trigger.

	•	Accessibility:
	•	The DialogContent should have role="dialog" and aria-modal="true" and aria-describedby/aria-labelledby linking to DialogTitle and DialogDescription. Radix does this if you use Title/Description components inside.
	•	Each Dialog should have a Title for screen-reader context.
	•	Styling:
	•	In our example, we styled DialogContent with bg-main text-mtext border-border. Possibly the default is already bg-white dark:bg-gray-800 in shadcn, which we override to our main theme. We likely want our dialogs to also use main background with black text for consistency, unless you want them white to stand out (that’s up to design).
	•	If main background is a color, a large dialog of that color might be intense; consider using bw (white in light, near-black in dark) for dialog background for a slightly different look.
	•	The border and drop shadow (Focus ring) on content: the example just uses border for outline. If we want a drop shadow, we could add shadow-shadow.
	•	The sm:max-w-lg class makes it responsive (on small screens full width, on bigger screens max width).
	•	If your dialog content is tall, Radix will allow scrolling within content (the container likely is max-h-[...vh] overflow-y-auto).
	•	Drawer vs Dialog: They also provide a Drawer component for side panel modals (discussed next). Dialog centers content; Drawer slides from side.

Drawer

Description:
Drawer is a variation of Dialog that slides in from a side of the screen (often from left or right). It’s typically used for navigation or settings panels.

Import:

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter
} from "@/components/ui/drawer";

(Assuming similar naming. Actually, from snippet: Drawer is built on vaul - a library for drawers - not Radix. They treat Drawer separate due to dragging support)【107†L53-L61】.

Props & Structure:
The Drawer API might mirror Dialog but using a different underlying (vaul by emilkowalski):
	•	<Drawer>: Root (similar to Dialog).
	•	Possibly accepts open and onOpenChange.
	•	One special prop: shouldScaleBackground (vaul’s feature to scale page when open)【107†L59-L67】.
	•	<DrawerTrigger>: trigger button (like DialogTrigger).
	•	<DrawerContent>: the panel that slides in.
	•	Possibly appears from right by default. Check if there’s prop like side="right".
	•	It’s built on DrawerPrimitive.Content from vaul【107†L107-L111】.
	•	Others: DrawerTitle, DrawerDescription, DrawerHeader, DrawerFooter, DrawerClose likely similar to Dialog ones but for Drawer context.

Usage Example:

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="default">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent className="h-full w-80 bg-main text-mtext border-l-2 border-border p-6">
    <DrawerHeader>
      <DrawerTitle>Notifications</DrawerTitle>
      <DrawerDescription>Recent updates</DrawerDescription>
    </DrawerHeader>
    <div className="py-4">
      {/* Drawer content goes here, e.g., list of notifications */}
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="noShadow">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

This drawer slides in from right (the class border-l-2 assumes it’s from right).
	•	We gave it a fixed width (80 i.e. 20rem).
	•	h-full so it stretches vertically.
	•	Contains header, content, footer.
	•	DrawerClose around a button to close.

Notes:
	•	The vaul library adds dragging to close (you can probably swipe it closed on mobile).
	•	The shouldScaleBackground prop on Drawer, if true, will cause the main content to slightly scale down when drawer opens (like iOS style). It’s true by default according to snippet (they pass it but default is true)【107†L59-L67】.
	•	The Drawer is likely fixed and covers part of screen. It might or might not dim the rest of screen (some drawers do).
	•	Vaul might still include an overlay behind it. Possibly not by default.
	•	If not, the background content will be visible and maybe scaled.
	•	DrawerOverlay: They forward Overlay to DrawerOverlay with style fixed inset-0 z-50 bg-overlay【107†L85-L93】. So yes, there’s an overlay dimming background by default.
	•	DrawerContent in vaul can have sizes via props too, but we just styled.
	•	Typically drawer comes from right. If you need from left, check vaul API, maybe a side="left" prop.
	•	The example above uses border-l (left border) because from right side, left border visible. If from left side, use border-r.
	•	If on mobile full-screen, maybe you’d use a Dialog instead or configure Drawer to full width (like a slide-up from bottom, but that is a different style).
	•	The code shows DrawerContent uses rounded-tl-... or such if from bottom. But not sure.
	•	Accessibility similar to Dialog: role=“dialog” and aria-modal on DrawerContent, etc. The DrawerTitle and Description provide context.
	•	DrawerClose is used for an explicit close button. Users can also click outside or press Esc to close presumably.

Dropdown Menu

Description:
Dropdown Menu is very similar to Context Menu but triggered by a normal click (left-click) on a button, typically. It’s used for dropdown actions (e.g., profile menu, or an options menu in a card).

Import:

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";

The subcomponents are analogous to ContextMenu (just prefixed with DropdownMenu instead of ContextMenu).

Differences from ContextMenu:
	•	Trigger is via left click (and keyboard Enter/Space when focused).
	•	Because of that, DropdownMenuTrigger is often a Button or IconButton.
	•	Usually used for known menu placements (like below the trigger).

Example:
A simple dropdown:

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="noShadow">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-40 bg-main border-2 border-border p-1 rounded-base">
    <DropdownMenuItem onSelect={() => alert('Profile')}>Profile</DropdownMenuItem>
    <DropdownMenuItem onSelect={() => alert('Settings')}>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onSelect={() => alert('Log out')}>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

This creates a dropdown under the “Options” button with a few items.

Everything available in ContextMenu (checkbox items, submenus, radio items) works similarly for DropdownMenu.

Notes:
	•	Often, DropdownMenuContent is aligned to the trigger (Radix defaults to top-left of content aligned to bottom of trigger, IIRC).
	•	You can use align="end" on Content to align to right end of trigger, etc., or pass sideOffset to adjust gap.
	•	If the trigger is an IconButton (three dots), also make sure to put an accessible label or sr-only text inside it or aria-label on the DropdownMenuTrigger if not using asChild (if asChild with a Button, label should be on that button).
	•	The library code likely is almost identical to context-menu, perhaps reusing a lot of styles.
	•	For example, context-menu snippet in search results [111] shows something about DropdownMenuTrigger asChild ... open add ... so they likely share underlying registry in Radix but triggered differently.
	•	Accessibility: Radix sets appropriate roles (menu, menuitem, etc.). The trigger gets aria-expanded and aria-controls when open.
	•	If using CheckboxItem or RadioItem, treat similar to context menu usage.
	•	In the docs, the Data Table example might have used a DropdownMenu for each row “Actions” button (like 3 dots in a table row to delete/edit). That pattern is common.

Form (Form & FormField)

Description:
The Form component integrates with React Hook Form (RHF) and Zod validation by providing form field wrappers, label, message, etc. It’s an abstraction to simplify using RHF + Zod in combination with the UI components.

Import:

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui/form";

Purpose & Usage:
	•	The Form component likely provides a context of RHF’s FormProvider and a typed form.
	•	FormField ties a field name to the rest of UI and integrates RHF’s Controller.

From the code snippet:
	•	Form is basically FormProvider from RHF【18†L81-L89】. You pass it your useForm instance.
	•	FormField is a wrapper using RHF’s <Controller> for a single field【18†L99-L107】. It takes name and then expects a render function via render={({ field }) => (...)} where you place the FormItem etc.
	•	FormItem is a simple div wrapper for a form control grouping (for styling, e.g., margin-bottom).
	•	FormLabel the label element (likely just styles the text, and ties to field perhaps via htmlFor).
	•	FormControl wraps the input component (like ) to apply any needed styling or pass ref.
	•	FormDescription and FormMessage for help text and error message respectively.

Example: (from docs usage【20†L418-L426】【20†L430-L439】)

const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: { username: "" }
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="Username" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />  {/* will display error if any */}
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>

Points:
	•	<Form {...form}> spreads the form methods into Form context. (Form component likely just returns <FormProvider value={form}> internally).
	•	<FormField name="username"> uses form.control internally to subscribe to that field.
	•	It renders children via a render prop. You use the provided field to spread into your Input (so it ties to RHF).
	•	FormMessage internally will fetch field state (via useFormContext and formState.errors[name]) to display error message if present for that field.

Notes:
	•	This setup reduces boilerplate of using <Controller> or register manually on each field.
	•	It ensures consistent structure: Label + Input + Description + Error.
	•	FormLabel likely automatically associates to FormControl (maybe adds htmlFor linking to input id). In code, they didn’t tie htmlFor to field, but the Input had an id equal to name maybe. Could manually add id to input (like we did placeholder and spread field, which includes name, value, onChange).
	•	FormMessage likely looks at formState.errors[name]?.message and prints it (maybe styled in red or something).
	•	The example uses zodResolver from @hookform/resolvers/zod to auto-generate errors, which is recommended.
	•	You must define a Zod schema (like const formSchema = z.object({ username: z.string().min(2, "Username must be at least 2 characters.") })) which is used in useForm.
	•	If fields are in a nested object, FormField name can be like "profile.username" using RHF naming.
	•	The Form components are mostly about structure and context; styling is minimal (e.g., FormItem might add className="flex flex-col space-y-1.5" or similar).
	•	This is a very useful abstraction if your project uses RHF with Zod.

Hover Card

Description:
Hover Card displays a floating card when a user hovers over a trigger element, often used for previews or additional info (like a user preview when hovering an @mention). It’s similar to a tooltip but can contain richer content.

Import:

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";

Props & Usage:
	•	<HoverCard>: Container for state (no specific props likely, maybe open control).
	•	<HoverCardTrigger>: The element that on hover (or focus) triggers the card.
	•	asChild to attach to an existing element, e.g., wrap an <a> or <span>.
	•	<HoverCardContent>: The floating content panel.
	•	Probably has props like align, side, or defaults to top or right of trigger.
	•	Contains the content to show.

Example:

<HoverCard>
  <HoverCardTrigger asChild>
    <a href="https://twitter.com/vercel">@vercel</a>
  </HoverCardTrigger>
  <HoverCardContent className="w-64 bg-main text-mtext border-2 border-border p-4 rounded-base">
    <div className="flex items-center">
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://twitter.com/vercel/profile_image" alt="@vercel" />
        <AvatarFallback>V</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <h4 className="text-sm font-heading">@vercel</h4>
        <p className="text-xs">Deploy websites instantly.</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>

Hovering over the @vercel link will show a card with an avatar and some info.

Notes:
	•	On desktop, it appears on hover; on mobile (touch), perhaps it could appear on tap (Radix might show on focus).
	•	It likely has a slight delay (Radix defaults: open delay 700ms, close delay 300ms or so).
	•	The side default for HoverCard could be top or right; Radix defaults to top if there’s space, else flips.
	•	It’s not click persistent; if user moves mouse off trigger to content quickly enough, content stays (Radix keeps it open as you hover content, but if you leave both trigger and content, closes after short delay).
	•	Style it similar to a tooltip or popover: likely bg-main border border-border by default in our theme. The snippet in the search [114] shows example content “The React Framework – created and maintained by @vercel.” which likely corresponds to a default styling.
	•	Possibly there’s an arrow (triangle pointing to trigger) that Radix can render if you include <HoverCardArrow />, but not sure if they included arrow in our version. If needed, you might style ::before pseudo with rotated square etc.
	•	Accessibility: HoverCard is a bit tricky for accessibility (hover only doesn’t work for keyboard or screen reader easily). Radix makes HoverCard also open on focus of trigger, so keyboard users can tab to the link and then see the content. However, screen readers won’t automatically read hover content unless the trigger is focusable (which it is, if it’s a link or button) and maybe aria-describedby linking to content? Not sure if implemented. Usually, HoverCard is supplementary so not critical if not read.
	•	Keep HoverCard content concise and not interactive ideally (if interactive, consider using Popover instead, because hover away would hide the content while user tries to click something in it).
	•	In above example, content is static info. If needed interactive (like Follow button in a profile hovercard), maybe allow small interactions but it’s borderline.

Image Card

Description:
ImageCard likely refers to a component specifically made to display an image with some overlay text or caption in neo-brutalist style. It might be like a card but with an image background or thumbnail.

Import:

import { ImageCard } from "@/components/ui/image-card";

(This is guess from navigation; likely exported.)

Without direct snippet, I’ll infer:
	•	It might be a wrapper around an <img> that applies brutalist border/shadow and possibly text overlay.

Props might include:
	•	src, alt for the image.
	•	Possibly title, description props if it automatically overlays text.

Possible Usage Example (in absence of specifics):

<ImageCard src="/photos/landscape.png" alt="Landscape">
  <h3>Beautiful Landscape</h3>
  <p>Photo by John Doe</p>
</ImageCard>

And the component might structure:

<div className="relative border-2 border-border shadow-shadow">
  <img src={src} alt={alt} className="w-full h-auto block" />
  <div className="absolute bottom-0 left-0 right-0 bg-overlay text-bw p-4">
    {children}
  </div>
</div>

This would put a translucent overlay at bottom with white text for title/desc.

This is speculative, as the docs show Image Card is one of components added back from older react components【14†L41-L45】. It likely has a specific style.

If no overlay, maybe it’s just a card that holds an image and perhaps a caption below.

Note: Without confirmation, skip details. But likely it has border (like other components) around the image to fit style.

Input OTP (One-Time Password Input)

Description:
InputOtp is a specialized input component for entering OTP codes (usually 6-digit codes where each digit is in its own input). It probably provides 6 inline inputs that auto-focus next one on input.

Import:

import { InputOtp } from "@/components/ui/input-otp";

Usage might be:

<InputOtp length={6} onComplete={(code) => verifyCode(code)} />

This is speculation, but typical OTP components have:
	•	length prop (number of digits).
	•	Possibly onComplete callback with the full code when all filled.
	•	Or you manage each field, but more likely the component handles internal state.

Behavior:
	•	Renders 6 single-character inputs or maybe one input styled to look like 6 separate fields (less likely).
	•	It likely handles moving focus as user types digits.
	•	Might allow only numeric input.
	•	Possibly handles paste of entire code (common feature: paste 6-digit number and fill all).

Notes:
	•	If user presses backspace on empty field, it should move focus back.
	•	There was no direct snippet found for InputOtp, but given it’s included in list, it likely covers the above.
	•	It’s built perhaps with Radix or just plain logic.

Example guess:

<InputOtp length={4} className="gap-2">
  {(props) => (
    // maybe children as a render prop is not likely. It likely just renders internally.
  )}
</InputOtp>

Probably easier: it renders its own set of Input small components (like the old react one did in older version according to changelog, it was removed and then maybe re-added).

Input (Text Field)

Description:
A standard text input field with brutalist styling. Use for single-line text entries (e.g., forms for name, email, etc.).

Import:

import { Input } from "@/components/ui/input";

Props & Usage:
	•	The Input component likely is a simple wrapper around <input type="text"> with Tailwind classes applied.
	•	Accepts all standard input props (value, placeholder, onChange, type, etc.).
	•	It’s styled with:
	•	Default height (2.5rem, h-10 perhaps),
	•	Border: border-2 border-border,
	•	Background: bg-bw (white in light, dark-gray in dark),
	•	Text: text-text,
	•	Padding: px-3 py-2,
	•	Focus: outline-none and focus ring (maybe focus:border-border or focus:ring-2 focus:ring-black focus:ring-offset-2),
	•	Disabled: opacity-50 pointer-events-none.

Example:

<Input type="email" placeholder="name@example.com" />

This would render a white input with black border, and black text for entered text. On focus, it might get an additional inner shadow or ring.

In forms, use with Label and FormMessage for best results.

Notes:
	•	If an icon is needed inside the input (like search icon at left), likely better to use a wrapper or use the CommandInput (as that has a search icon by default).
	•	Input here covers text, email, etc. For <textarea>, there’s a separate Textarea component.
	•	You can change type prop to “text”, “email”, “password”, etc. The styling remains same.
	•	The width is full (w-full) by default if you place it in a flex or block container. If not, it shrinks to fit content. Usually you wrap it in parent that has width.
	•	For read-only or disabled, styling might be similar to disabled (semi-transparent text).
	•	If you need a smaller or larger input, you might override classes (like p-1 for smaller padding).
	•	It is likely a direct styled component with minimal logic (just className merge).

Label

Description:
The Label component is used to render a form field label associated with an input. It’s likely a simple wrapper around <label> tag with styling.

Import:

import { Label } from "@/components/ui/label";

Props & Usage:
	•	Accepts htmlFor prop to link to an input’s id.
	•	Children: the text of the label (and you can include required asterisks or icons if needed).
	•	Possibly variant prop but unlikely, it’s just standard.

Example:

<Label htmlFor="email">Email address</Label>
<Input id="email" type="email" placeholder="you@example.com" />

This will produce a label (maybe bold or smaller text).

Styling:
	•	Usually labels are smaller or same size as input text, maybe slightly bold.
	•	Could be text-sm font-medium.
	•	The label might also use cursor-pointer to indicate clickable (common in forms).
	•	If inside FormItem context, they might style based on peer disabled state (like if input is disabled, label is lighter color).

Notes:
	•	For accessibility, always match htmlFor with input id. The Form components often handle labeling via context, but Label is provided for standalone usage too.
	•	If you need to visually hide a label (for screen readers only), apply sr-only class on Label or use a variant (if provided).
	•	If indicating required fields, you might do something like:

<Label htmlFor="name">Name <span className="text-red-500">*</span></Label>


	•	It’s a very straightforward component (the older code suggests it’s just forwardRef of label with classes).

Marquee

Description:
Marquee likely is a component for scrolling text (in neo-brutalist style, maybe a horizontal auto-scrolling text ticker).

Import:

import { Marquee } from "@/components/ui/marquee";

Usage & Props:
	•	Possibly it takes children (content to scroll) or text prop.
	•	Possibly speed or direction prop.

Without the snippet, I’ll guess usage:

<Marquee>Breaking News: NeoBrutalism UI is awesome!</Marquee>

This would scroll that text continuously.

Behavior:
	•	It might use a CSS animation to move the text from right to left, repeating.
	•	Or use some JS to loop (but likely CSS infinite animation).
	•	The style may include a thick border outline around the marquee container to fit brutalist look, and text likely black on some background.

Notes:
	•	Check if there’s a control to pause on hover or something.
	•	Could be implemented via pure CSS (keyframes with translateX).
	•	Ensure it duplicates the text for seamless scroll (common marquee trick).
	•	It’s not widely used except for stylistic effects.

Menubar

Description:
Menubar presumably is a component for a menu bar (like a top navigation with submenus, similar to classic desktop app menu or a multi-level dropdown navigation).

Import:

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent
} from "@/components/ui/menubar";

This is similar to Dropdown/Context Menu, but oriented horizontally as a bar of menus.

Usage:

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      <MenubarItem>Open File...</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Copy Link</MenubarItem>
          <MenubarItem>Email</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>Quit <MenubarShortcut>⌘Q</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked={showLineNumbers}>Show Line Numbers</MenubarCheckboxItem>
      <MenubarItem>Preferences...</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

This demonstrates a “File” and “Edit” menu with various items, including submenus and checkable items.

Notes:
	•	Menubar is essentially a wrapper for multiple menus, aligning triggers horizontally. Radix likely uses Menubar (which is similar to Menu but with orientation horizontal).
	•	MenubarTrigger is like a top-level menu button. MenubarContent is the dropdown that appears below that trigger on click or hover (Menubar often supports hover open after delay for subsequent menus).
	•	Items inside use same pattern as DropdownMenu but with Menubar prefix.
	•	Shortcuts likely use MenubarShortcut span for styling like in menus.
	•	The styling might differ slightly for MenubarTrigger (maybe it’s styled like a button but likely flat in a bar).
	•	If implementing complex app-like menubar, this handles focus and arrow key navigation (left-right to switch triggers, down to open, etc.). Radix Menubar provides that.

Navigation Menu

Description:
Navigation Menu is a component for site navigation with dropdowns (often multi-column or grid dropdowns). Possibly similar to Menubar but oriented for website nav where submenus can be mega-menus.

Import:

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

Usage & Props:
It might look like:

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="p-4">
          <li><NavigationMenuLink asChild><a href="/prod1">Product 1</a></NavigationMenuLink></li>
          <li><NavigationMenuLink asChild><a href="/prod2">Product 2</a></NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Company</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="p-4">
          <li><NavigationMenuLink href="/about">About Us</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/careers">Careers</NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
      {/* This one is a direct link without dropdown */}
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

	•	NavigationMenu root sets context.
	•	NavigationMenuList holds top-level items (could be ul).
	•	Each NavigationMenuItem can contain either:
	•	A NavigationMenuTrigger which opens a NavigationMenuContent (dropdown).
	•	Or a direct NavigationMenuLink for items with no submenu.
	•	NavigationMenuLink is used for actual navigation links (maybe styled as menu items).
	•	The content can hold custom HTML (like an <ul> with links, possibly using NavigationMenuLink inside).
	•	This component is quite complex as Radix NavigationMenu supports dynamic positioning and, often, indicator lines under triggers.

Notes:
	•	The NavigationMenuContent might be positioned relative to the entire bar or trigger, with some offset.
	•	There might be a NavigationMenuIndicator element to show an active tab underline (not sure if included in our lib).
	•	Typically used for main website nav with multiple sections.
	•	Consider mobile: likely you’d hide this and use something else for mobile nav (like Drawer or Sheet).
	•	Accessibility: triggers are buttons with aria-expanded, content is a popover menu region with proper roles.
	•	There is also possibly NavigationMenuViewport concept from Radix (to handle animations), but our simplified usage might not expose that (maybe internal).
	•	It’s a fairly advanced component, but using it similarly to the Radix docs should suffice.

Pagination

Description:
Pagination component likely provides UI for paginating through pages of content (with page numbers, next/prev). Possibly built on Radix or custom logic.

Import:

import { Pagination, PaginationTrigger, PaginationList, PaginationEllipsis } from "@/components/ui/pagination";

(This is guess, actual subcomponent names unknown, but likely they have Prev, Next, page item components.)

No snippet given; maybe usage is like:

<Pagination totalPages={10} currentPage={5} onPageChange={setPage}>
  <PaginationList>
    <PaginationTrigger page={1}>1</PaginationTrigger>
    <PaginationTrigger page={2}>2</PaginationTrigger>
    <PaginationEllipsis />
    <PaginationTrigger page={5}>5</PaginationTrigger>
    <PaginationTrigger page={6}>6</PaginationTrigger>
    <PaginationEllipsis />
    <PaginationTrigger page={10}>10</PaginationTrigger>
  </PaginationList>
</Pagination>

But likely simpler:
	•	Might not manage state internally, but if it does, you pass total and initial.

Notes:
	•	Without docs snippet, proceed carefully. Possibly just an example component with structure or maybe they omitted its documentation beyond listing it.
	•	Many projects implement their own, but if provided, they might have arrows for next/prev and numbers with styling (bordered buttons, etc.).

Popover

Description:
Popover is a component for showing floating content triggered by a click or focus, similar to Dropdown but more general (no specific menu roles). We already used Popover in Combobox and Date Picker.

Import:

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

Props:
	•	It’s likely a direct wrapper around Radix Popover.
	•	Popover: can be used controlled via open prop or uncontrolled by triggers.
	•	PopoverTrigger: an element (button or child element as trigger).
	•	PopoverContent: the content pop-up.
	•	Props: side, align, sideOffset etc. to position around trigger.

Usage Example:
We already saw:

<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="p-4 border-2 border-border bg-main rounded-base">
    <p>This is popover content.</p>
  </PopoverContent>
</Popover>

This attaches to the button; clicking toggles it. The content shows up (default below trigger, centered perhaps).

Notes:
	•	PopoverContent likely has sideOffset default like 4px.
	•	It is similar to Dialog but non-modal (doesn’t block background interaction except maybe focus handling).
	•	It closes when clicking outside or pressing Esc (Radix default).
	•	If you need an arrow (little triangle), Radix Popover provides <PopoverArrow> component. Not sure if included, but could be:

<PopoverContent>
  <PopoverArrow className="fill-current text-main" />
  ... content ...
</PopoverContent>

But our styling might not have arrow by default (the docs didn’t mention).

	•	A common use: feature info popovers, or custom selects (like Combobox above).
	•	Accessibility: PopoverTrigger gets aria-expanded and controls, PopoverContent role=“dialog” (or just a section).
	•	Not much else, pretty straightforward.

Progress

Description:
Progress is a progress bar indicator showing completion percentage.

Import:

import { Progress } from "@/components/ui/progress";

Props & Usage:
	•	Possibly value (number 0-100) to indicate progress percentage.
	•	Possibly max (defaults to 100).
	•	It may be a progress HTML element with classes.

Example:

<Progress value={65} className="w-full" />

This would show a progress bar 65% filled.

Styling:
	•	The progress track likely has a fixed height (e.g., h-2).
	•	The filled portion likely uses bg-main and text-mtext or black as fill.
	•	Possibly they style via two divs: one background (e.g., bg-bw or bg-gray) and one inner as value bar.

Check snippet [11] indicates progress example:
Actually search [111] shows a ‘Progress - Neobrutalism components’ listing: likely similar to default.

Notes:
	•	Accessibility: It should have role="progressbar" and aria-valuenow, aria-valuemin, aria-valuemax.
	•	Possibly the component sets these ARIA attributes and uses <div> or <progress> tag accordingly.
	•	You might style the bar with stripes or animations externally if needed (not default).
	•	It’s mostly visual. If using 100 as max, just supply value as percentage or actual number relative to max.

Radio Group

Description:
Radio Group provides multiple radio buttons where only one can be selected.

Import:

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

Props & Usage:
	•	<RadioGroup>: container, likely based on Radix RadioGroup.
	•	Props: value, onValueChange, or uncontrolled defaultValue.
	•	<RadioGroupItem>: an individual radio button.
	•	Prop: value for its identifier.
	•	Children: maybe a label could be placed next to it, but maybe they require separate Label component.

Actually in usage, likely:

<RadioGroup defaultValue="option2">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
</RadioGroup>

This pattern means you wrap each radio with a label.

Styling & Behavior:
	•	RadioGroup likely applies context for the items (so they know which is selected).
	•	RadioGroupItem is similar to Checkbox, but round:
	•	an outer ring styled as border (2px border making a circle).
	•	When selected, an inner dot is shown (likely with bg-main or black).
	•	They likely use Radix RadioGroup, which has RadioGroupPrimitive.Item and RadioGroupPrimitive.Indicator.
	•	The code likely uses data-state=checked to style the indicator (like fill).
	•	The item probably is focusable by arrow keys (Radix handles).
	•	The above manual pairing with Label needed so you can click label to toggle.

Notes:
	•	Use a name prop if you need to group with native form submission (Radix RadioGroup likely outputs one input with given name).
	•	If you have many, you could map them dynamically.
	•	For disabled state, probably add disabled to RadioGroupItem (which Radix supports).
	•	Very similar to normal radio input usage, just custom styled.

Resizable

Description:
Resizable might be a component enabling drag-resizing of an element (like a panel or textarea). Possibly based on @radix-ui/react-resizable or a custom util.

Import:

import { Resizable } from "@/components/ui/resizable";

But context shows they had “Resizable” in list.

It might not be a generic Resizable container (Radix doesn’t have one that I recall, but they might adapt a library or custom).

Maybe it’s intended for a container with a handle to resize width or height.

Without doc snippet, skip details, but presumably usage is:

<Resizable defaultWidth={300} minWidth={100} maxWidth={600}>
  <div>Some content</div>
  <Resizable.Handle />  {/* a grip to drag */}
</Resizable>

But since uncertain, move on.

Scroll Area

Description:
ScrollArea is a component providing a custom styled scrollbars container (useful for customizing scrollbar look while preserving overflow functionality).

Import:

import { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner } from "@/components/ui/scroll-area";

(This matches Radix ScrollArea parts).

Usage:

<ScrollArea className="h-40 w-60 border border-border">
  <ScrollAreaViewport>
    <div className="p-2">
      {/* content that overflows */}
    </div>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="vertical">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaScrollbar orientation="horizontal">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaCorner />
</ScrollArea>

Radix ScrollArea:
	•	ScrollAreaViewport is the scrollable container (like an overflow-auto wrapper).
	•	The ScrollAreaScrollbar and Thumb are custom scrollbars that appear when needed.
	•	ScrollAreaCorner is the bottom-right corner placeholder if both scrollbars visible.

Notes:
	•	This is beneficial if default scrollbars are considered ugly or you want consistent style across browsers.
	•	The styling: Thumb likely has bg-border or bg-text small rectangle and on hover maybe bg-text.
	•	You can style width of scrollbar by classes on ScrollAreaScrollbar (maybe default 2px or 4px).
	•	If content only scrolls vertically, can omit horizontal scrollbar part.
	•	Ensure to include ScrollAreaCorner if both scrollbars used (to avoid double background corner).
	•	If content is small, scrollbars can be hidden until scroll (Radix can hide scrollbar if not needed).
	•	It may hide by default on mac (as system does) but with custom it shows a slim bar presumably always or on hover.
	•	Check Radix ScrollArea docs for default behavior.

Select

Description:
Select is a custom select (dropdown) component often based on Radix Select. It allows selecting from a list of options, often styled similar to a dropdown menu.

Import:

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue
} from "@/components/ui/select";

Usage:

<Select onValueChange={setFramework}>
  <SelectTrigger id="framework">
    <SelectValue placeholder="Select framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="svelte">Svelte</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Backend</SelectLabel>
      <SelectItem value="node">Node.js</SelectItem>
      <SelectItem value="python">Python</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

This sets up a select with grouped options.

Components:
	•	SelectTrigger acts similar to an Input or Button that shows the current selection and a caret icon.
	•	SelectValue inside trigger displays selected value or placeholder.
	•	SelectContent is the dropdown list container.
	•	SelectItem corresponds to an option. It’s clickable and selectable.
	•	Group and Label optionally group items (like optgroup).
	•	Select root likely wraps Radix’s context (no explicit list like in menus; the Radix Select uses portal for content).
	•	The select item styling is similar to menu items (highlight on focus, check mark for selected item).
	•	Actually, Radix Select includes SelectItemText and SelectItemIndicator subcomponents internally.

Notes:
	•	The Select from shadcn is essentially Radix Select with styling. It’s a fully accessible replacement for .
	•	The placeholder is shown via SelectValue placeholder when no value is selected.
	•	The SelectTrigger should get aria-labelledby or aria-label properly by Radix hooking into Label if present (the id on trigger can be used by a Label component’s htmlFor).
	•	If controlling, pass value and onValueChange. Or use defaultValue for initial state.
	•	The content uses a portal, so it might appear in DOM root (Radix does that by default).
	•	The brutalist style will make trigger look like Input or Button (with border, etc.), and content like DropdownMenuContent (bg-main, border).
	•	They probably integrated a SelectItem which is similar to context menu item with check indicator:
	•	The selected item likely shows a check icon on left in the list (Radix uses an indicator slot for selected items).
	•	Only one can be selected if not multi-select (Radix Select is single-choice).
	•	For multi-select, Radix has a separate MultiSelect but likely out of scope (just single select in this UI).
	•	In our example, grouping is optional. You can have items directly under content without group.
	•	If no grouping, can omit SelectGroup and SelectLabel and just list SelectItem.

Sheet

Description:
Sheet might be a simplified Drawer (like a bottom sheet or side sheet). The list shows “Sheet”, likely meant as a slide-over panel.

Import:

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";

It might be Radix Dialog but styled to come from bottom or side. Actually Radix has AlertDialog, Dialog, and community Drawer but some call it sheet for mobile-friendly.

Usage Example:
Probably identical to Drawer usage, but maybe from bottom:

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="h-1/2">
    <SheetHeader>
      <SheetTitle>Mobile Menu</SheetTitle>
    </SheetHeader>
    <div className="p-4">...sheet content...</div>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Close</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>

	•	SheetContent might accept side: “top”, “right”, “bottom”, “left”.
	•	Styling wise, it’s similar to DrawerContent but maybe with a bit different default (like border-radius on top corners if from bottom).
	•	It’s likely based on Radix Dialog with some tweaks.

Notes:
	•	If Drawer exists, Sheet might be redundant or intended as bottom sheet for mobile modals.
	•	The example usage should suffice though.

Skeleton

Description:
Skeleton is used to show a placeholder loading state for content, typically as a gray block or shimmer.

Import:

import { Skeleton } from "@/components/ui/skeleton";

Props & Usage:
Likely just a <div> with an animation:
	•	Accepts className to shape it (width/height).
	•	Possibly a boolean animate prop (but likely always animate with pulse).

Example:

<Skeleton className="w-full h-6 rounded" />

This would create a gray bar, height 1.5rem, full width, with rounded corners (maybe using CSS var border-radius or class).

In use:

<div className="space-y-2">
  <Skeleton className="h-8 w-1/2" /> {/* title loading */}
  <Skeleton className="h-4 w-full" /> {/* line loading */}
  <Skeleton className="h-4 w-full" />
</div>

This yields a skeleton placeholder with one long bar and two shorter ones.

Styles:
	•	Typically skeleton uses bg-muted or some neutral background. Possibly bg-border or bg-gray-300.
	•	Might have an animation like animate-pulse to gently fade in/out brightness.
	•	In dark mode, might need a different shade (like bg-gray-700).

Notes:
	•	It’s decorative, so no content. It’s not accessible content (should be hidden from assistive tech if actual content is not there).
	•	Possibly they add aria-hidden="true" by default.
	•	It’s often used during loading in place of real components.

Slider

Description:
Slider is a component for selecting a value in a range (like volume slider). Based on Radix Slider.

Import:

import { Slider } from "@/components/ui/slider";

Props & Usage:
	•	Likely defaultValue, min, max, step, onValueChange.
	•	Accepts multiple values in array if it’s a range slider (Radix supports multi-handle if needed).
	•	Possibly they just cover single-handle usage.

Example:

<Slider defaultValue={[50]} max={100} step={1} onValueChange={(val) => setVolume(val[0])} className="w-40" />

This shows a slider from 0 to 100, initial 50.

Styles:
	•	Radix Slider provides parts: track, range (filled part of track), thumb (the handle).
	•	The library likely applies classes:
	•	Track: relative bg-bw (light gray background), border? or just background with height (like h-1).
	•	Range (the portion up to value): absolute, bg-main or text? Actually likely bg-main.
	•	Thumb: a button with w-4 h-4 rounded-full bg-main border-2 border-border maybe, making a knob with black border and filled with main color or maybe blank (white) inside. But since main is light, maybe thumb is blank/white with border, and range is black? Hmm, need guess:
	•	Possibly they made the range black and thumb a white circle with black border.
	•	On focus, thumb gets ring.
	•	If disabled, maybe all grayscale.

Notes:
	•	Radix slider is accessible (arrow keys and Home/End keys move it, and it has proper aria-valuenow).
	•	If using a label, just put a  associated by some mechanism (maybe just context not built in; just visually do).
	•	If multiple thumbs (range selection), you’d get two values in array from onValueChange.

Changelog note: “Removed React Range Slider component” in Aug 2024【14†L50-L58】 implies they switched to Radix slider presumably. So this slider is likely Radix.

Switch

Description:
A toggle switch component (like a checkbox but styled as an ON/OFF switch).

Import:

import { Switch } from "@/components/ui/switch";

Props & Usage:
Likely similar to Checkbox:
	•	checked, onCheckedChange or defaultChecked.
	•	Possibly id to connect label.

Example:

<Switch id="airplane-mode" checked={isOn} onCheckedChange={setOn} />
<Label htmlFor="airplane-mode">Airplane Mode</Label>

Styles:
	•	Radix Switch uses SwitchPrimitive.Root and SwitchPrimitive.Thumb.
	•	Usually:
	•	Root: relative inline-flex items-center w-10 h-6 (for example), background: bg-bw when off, bg-main when on (with data-state=checked styles).
	•	Border: border-2 border-border to outline the shape.
	•	Thumb: absolute round element that moves left/right. E.g., size 5x5 (almost full height minus border), background bg-blank (maybe black or white).
	•	When on, thumb may move to right and background color (of root) changes to indicate on.
	•	So a white toggle with black border, black thumb might be default off, and blue background with black border, black thumb for on? Or black thumb on white vs white thumb on black? There’s some design choice:
Possibly, off state: white background, thumb black (a black circle on white track). On state: main background (light blue track), thumb black (so it might not visually indicate well? Maybe thumb becomes blank/white).
Could invert: Off state: black background track, white thumb; On state: main background track, blank (white) thumb. But then border needed too.
Without actual, assume they keep it simple: track always has border, thumb always has border, and just position changes, background maybe changes slightly.

Notes:
	•	Include appropriate label for understanding (since a separate label is needed, as above).
	•	If using inside a form with RHF, treat like a checkbox (true/false).
	•	If disabled, style might lighten or dashed.

Table

Description:
Basic table components (already touched in Data Table, but summarizing styling separately).

Import:

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";

Usage:
We saw an example in Data Table section. This can be used static or integrated with TanStack.

Styles:
	•	Table: likely w-full border-collapse.
	•	TableHeader (thead): maybe just grouping container.
	•	TableRow (tr): no default border. Possibly add hover:bg-main/50 if row is hoverable (but maybe not by default).
	•	TableHead (th): possibly text-xs font-heading uppercase text-left bg-bw with bottom border. Or bold normal-case text. But in shadcn, table heading is small uppercase text often.
	•	TableCell (td): p-4 align-middle maybe, border-t: border-t-2 border-border to separate rows.
	•	Caption: text-sm text-muted-foreground text-left mt-4.

Notes:
	•	Could style alternate rows manually (like using nth-child in CSS).
	•	Provided Table is more about semantic roles and some base styling. For heavy customization, one might use own classes.

Tabs

Description:
Tabs component for tabbed interfaces.

Import:

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

Usage:

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account settings</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>

This uses Radix Tabs:
	•	Tabs root holds state.
	•	TabsList wraps triggers (like a tab bar).
	•	TabsTrigger for each tab button, with value prop.
	•	TabsContent panels with corresponding value.

Styles:
	•	TabsList likely has inline-flex border-b-2 border-border to underline the whole tab bar and maybe background bg-bw.
	•	TabsTrigger: maybe px-4 py-2 text-sm font-medium and bottom border when active:
	•	When active (data-state=active), possibly border-b-2 border-black bg-main or just border bottom black and no background (depending on style).
	•	Alternatively, maybe active tab has no bottom border (blends with the bar) and others have a bottom border so it looks like a raised tab. But more likely they invert: active tab draws an underline highlight.
	•	Could also use text color changes. Possibly they use text-mtext (black) always, underline for active.
	•	Trigger also should be focusable (arrow keys move between triggers).
	•	TabsContent: some padding top possibly or just straight content.

Notes:
	•	Manage state by defaultValue or controlled via value and onValueChange.
	•	Use unique values string to map triggers to content.
	•	If a TabContent has form elements, focusing out and using keyboard arrow might cause weird focus, but Radix handles focus roving on triggers only, content elements are normal.
	•	If tabs are used to hide content, ensure maybe an aria-label on TabsList for what the tabs relate to.

Textarea

Description:
A multi-line text input component.

Import:

import { Textarea } from "@/components/ui/textarea";

Props & Usage:
Similar to Input:
	•	All <textarea> attributes (rows, cols, value, placeholder, etc.).
	•	Possibly style classes:
	•	border-2 border-border bg-bw text-text,
	•	rounded-base p-2,
	•	min-h:??.
	•	It likely auto-resizes if content grows only if you set that or class.

Example:

<Textarea placeholder="Your message..." rows={4} />

Notes:
	•	Use with Label as needed.
	•	The component is probably a direct styled textarea (className forwarded, etc.).
	•	If you want auto-height adjustment, you’d do it manually (maybe using onInput to adjust height or a wrapper).
	•	It’s straightforward.

Toast

Description:
Toast is a component for ephemeral messages (notifications) that appear briefly. It’s combined with a hook useToast to trigger from anywhere.

Import:
In usage, likely there’s:

import { useToast } from "@/hooks/use-toast";

and also maybe ToastProvider context somewhere. But in the docs, they used useToast hook and ToastAction, Toast components.

Looking at snippet [32]:
	•	There’s a useToast hook which returns a toast function to spawn a toast【32†L297-L305】.
	•	The Toast components themselves (Toast, ToastProvider, ToastViewport, etc.) are likely set up in a global context (like placed at app root).
	•	They provided ToastAction component to render a button inside toast (like an “Undo” action).

Usage Example (from docs):
They used:

const { toast } = useToast();

<Button onClick={() => {
  toast({
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
    action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
  });
}}>
  Default
</Button>

This triggers a toast with title, description, and an action button labeled “Undo”.

So usage:
	1.	Place a <ToastProvider> and <ToastViewport> (max container) at app root likely.
	2.	useToast hook to create toasts.

To display toasts, the app should render toast list. Possibly included as part of useToast hooking:
	•	Possibly in the Template or Layout they included <Toaster /> (some libs do that).
	•	But from code [37], they export ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction【37†L269-L277】 for use.
	•	The useToast hook likely uses context to add to a toast list and ensures ToastViewport (with position styling: top-right etc.) is rendered.
	•	Possibly the docs instruct to include a <Toaster /> component (like Shadcn does: they had example for adding  to app).

Components likely provided for toasts:
	•	<Toast> (the container for one toast)
	•	<ToastTitle>, <ToastDescription> for content.
	•	<ToastClose> a button to close.
	•	<ToastAction> for a CTA button (like Undo).
	•	<ToastProvider> context.
	•	<ToastViewport> container where toasts mount.

Styling:
	•	They likely placed ToastViewport fixed top-0 right-0 or bottom-0 right-0 with some padding etc. (the snippet [30] shows the viewport style: fixed top-0 z-[100] flex flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]【30†L73-L81】).
	•	Toast has a black border, background presumably bg-main or bg-bw? Actually snippet [30] lines 92-96:
	•	Toast: “group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-base border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark p-6 pr-8 transition-all …”【30†L91-L96】.
	•	This suggests:
	•	border-2 border-border (and dark:border-darkBorder presumably darkBorder is white so border is white in dark mode).
	•	Light shadow and dark shadow classes (maybe shadow-light is the drop shadow in light mode, dark is different).
	•	The toast probably has a light background in light mode (maybe white, since they mention dark border separate).
	•	Possibly the toast background is part of bg-main usage or they set background in provider style.
	•	The text likely normal.
	•	ToastTitle (snipped [37†L221-L229]) is “text-sm font-heading”【37†L231-L239】.
	•	ToastDescription “text-sm font-base”【37†L251-L259】.
	•	ToastClose: they had an X icon with class making it appear on hover (group-hover:opacity-100) and absolute top-right with a small button class.
	•	ToastAction: likely a special button styled differently (maybe subtle outline).
	•	But snippet shows ToastAction is likely a component that just renders a  with provided altText used for SR-only.
	•	The toasts appear at bottom-right on small screens (sm) and top-right on larger by the classes in viewport.

Using Toast:
	•	Usually you’ll render something like <ToastProvider><ToastViewport /></ToastProvider> at top level. The useToast hook then handles adding to a context state and auto-removing after a timeout (maybe 3-5 seconds).
	•	When calling toast({...}), it likely auto closes after some time unless action is clicked or user dismisses.

Notes:
	•	Make sure to add altText to ToastAction for screen readers (since the button text might not fully describe outcome).
	•	If you want sticky toasts (require manual close), they might allow duration: Infinity or similar.
	•	The architecture similar to how Shadcn’s useToast is implemented: see issue snippet [33] - it uses context and functions to spawn toasts.
	•	It’s good to place ToastViewport in a portal (the provider might do that automatically).

Utilities & Hooks

Class Name Utility (cn)

The code uses a utility function cn (short for classNames) to conditionally join class names【16†L129-L137】. It’s typically defined as:

export function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

This is used internally in components to merge tailwind classes with user provided className. You might use it in your app too.

For example:

<div className={cn("p-4", isActive && "bg-main", className)}>...</div>

It will include “bg-main” only if isActive true, plus any className passed from parent. It’s just a helper (no UI output on its own).

Toast Hook (useToast)

As covered, useToast is the primary way to spawn toasts from anywhere. To use:
	1.	Ensure the Toast system is mounted. The library likely exports a <ToastProvider> or instructs adding <Toaster /> somewhere global. If you used create-next-app with shadcn, they often include it.
	•	If not, you can create a component:

import { useToast, ToastViewport } from "@/hooks/use-toast";

export function Toaster() {
  // call useToast to ensure provider is used, though the hook usually returns static toast func and context behind the scenes.
  return <ToastViewport />;
}

But likely they have ToastProvider wrapping ToastViewport already inside use-toast.ts.

	•	Actually, useToast code suggests it might directly use a global event bus or context, not needing an explicit provider by user.

	2.	Import useToast:

import { useToast } from "@/hooks/use-toast";

It’s a React hook that returns { toast, dismiss } possibly.
	•	toast is a function to show a new toast.
	•	dismiss possibly dismisses all or particular toast by id.

	3.	Call toast({ title, description, action, duration }):
	•	title: string or JSX for bold heading.
	•	description: string or JSX below.
	•	action: a <ToastAction> element if any.
	•	duration: in ms (default maybe 3000ms or so).
	•	Optionally variant if they support styling differences (maybe “destructive” to red style? not sure but possibly they had variants like in other libs).
	•	This returns an id so you can programmatically dismiss by dismiss(id) if needed.

Example:

const { toast } = useToast();

function handleDelete() {
  deleteItem();
  toast({
    title: "Item deleted",
    action: (
      <ToastAction altText="Undo delete" onClick={undoDelete}>
        Undo
      </ToastAction>
    )
  });
}

This would show a toast and if Undo clicked, calls undoDelete. We provided altText for accessibility.

ToastAction:
	•	Use it to provide an interactive button inside the toast message. It likely is styled like a link or minimal button. It accepts altText which is announced to screen readers along with “button”.
	•	E.g., <ToastAction altText="Goto settings">Settings</ToastAction>.

Dismiss:
	•	If user manually closes via the X icon (ToastClose), or after duration, the toast will vanish. If needed, you can call dismiss() to close all, or pass an id to close a specific one.

Make sure your main layout includes the toast viewport. If not added, the toasts won’t show. Possibly the neobrutalism site suggests to add something like:

import { Toaster } from "@/components/ui/toast"  // maybe they export a bundled component?

<Toaster />

Check the GitHub if components/ui/toast.tsx exports Toaster or ToastViewport to use. In snippet:
They have ToastViewport exported【37†L275-L283】. So you could do:

import { ToastViewport } from "@/components/ui/toast";
...
<ToastViewport />

Place that in app root (likely in Next.js, put in layout or providers). It by default attaches to top-right as per classes.

Best Practices
	•	Composition over Configuration: Many components (DropdownMenu, ContextMenu, Menubar, NavigationMenu, Combobox, etc.) are composable primitives. This gives you flexibility to structure content (add icons, groups, separators). Embrace that by customizing children as needed rather than expecting tons of props.
	•	Theming: Utilize CSS variables approach to theme quickly. If you need multiple themes (e.g., light/dark variants beyond the provided one), you could swap the :root variables dynamically. The design is such that one set of variables defines the entire style palette.
	•	Accessibility: Most components are accessible out of the box (thanks Radix). Ensure to use provided subcomponents correctly (like Label with htmlFor, altText in ToastAction, etc.) to maintain that.
	•	Customizing: If the default variant of a component doesn’t suit (e.g., Alert only has default and destructive), you can extend it: the code often uses cva (class-variance-authority) for variants, so adding one involves adjusting the component code. Alternatively, use className to override small things (like background color).
	•	Performance: The components are mostly pretty lightweight. The heaviest might be Calendar (react-day-picker) and DataTable (TanStack Table, if used with many items consider virtualization separately).
	•	Dark Mode: It’s available, but as the author said, design might not be as polished. Test your app in dark mode: some colors might need tweaking (e.g., maybe darkBorder variable is set to white for borders in dark mode, ensure contrast is okay).

Troubleshooting & Common Issues
	•	Tailwind classes not applied: If a component’s styles seem missing, likely Tailwind isn’t seeing the classes. Check tailwind.config.js content includes the path to the neoBrutalism component files (e.g., "./components/ui/**/*.{js,ts,jsx,tsx}"). Without that, those classes might be purged.
	•	Components not working or throwing: Ensure any peer dependencies are installed:
	•	Radix UI libraries (like @radix-ui/react-accordion, react-day-picker, etc.) should have been installed by CLI. If you added a component manually, check its imports at top and install missing packages.
	•	Focus or z-index issues: If Popovers, Dropdowns appear behind other content, adjust z-index. The default for many is z-50 or z-[100] (like ToastViewport uses z-[100]). If you have a parent with high z-index or transform that creates stacking context, might interfere. Increase z-index or adjust context.
	•	Dark Mode styling: If something looks off in dark mode (like text not visible), you might need to refine CSS variables. E.g., maybe darkBorder was not set but code expects it. The default provided variables have --border same in dark and --darkBorder defined in tailwind theme (they set secondaryBlack).
	•	Shadcn CLI usage: The installation steps indicate using CLI for each component. If something isn’t styled correctly, double-check you copied the correct variant JSON (css vars vs util). Also verify if you accidentally copied an older (React-only) version from GitHub instead of the new Radix one. The changelog shows in Oct 2023 first version was “17 type-safe React components” (maybe not using Radix), then in 2024 they moved to Shadcn (Radix). So ensure you’re using latest code (the doc site likely up-to-date).
	•	Icons missing: The components use Lucide icons (via lucide-react). Ensure lucide-react is installed and you imported icons like import { Check, ChevronDown, X } from "lucide-react" when customizing. The component code often already imports needed ones. If you see broken icons, import and pass them in as needed.
	•	Form not working: If using the Form component, ensure you wrap in <Form>...<form>...</form></Form> as shown, not just use FormField alone. The RHF FormProvider is tied in Form component.
	•	Console warnings: Radix might warn if content not properly wrapped or missing required structure. E.g., “A <SelectTrigger> must be wrapped in <Select>” or similar. Follow the documented structure exactly.
	•	Library versions: If you copy code from site, make sure your Radix packages are at least those versions. Ideally, use the same versions that the neobrutalism library expects (they likely match the ones Shadcn uses, often Radix 1.x).
	•	Performance of lists: If you have a huge list in Combobox or Select, consider virtualization (not built-in, you’d integrate something like react-virtual).
	•	Custom components not listed: If you think of a UI element not explicitly covered (like modal overlay specifics, or loading spinners), check if it’s included (Spinner might not be, but one can make a small one).
	•	Conflicts: The classes are pretty generic (e.g., text-sm). If you use a CSS reset or global styles, nothing unusual should conflict. Tailwind base styles could affect some Radix slots (like the contenteditable or [hidden] attributes they use might be styled by base, but tailwind’s preflight should handle common tags fine).

Finally, to keep this as a reference, consider bookmarking the NeoBrutalism docs site for code examples. This document captured essentially the content and usage patterns of each component, which should greatly assist in development with NeoBrutalism UI.
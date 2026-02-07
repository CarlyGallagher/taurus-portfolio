# Portfolio - Carly Gallagher

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a sleek bronze and black color scheme with smooth animations and a fully functional contact form.

## 🌟 Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Contact Form** - Integrated with Resend for email delivery
- **Skills Showcase** - Interactive grid displaying technical skills
- **Project Gallery** - Card-based layout for project highlights
- **Social Links** - Direct links to LinkedIn, GitHub, and Instagram
- **Typewriter Animation** - Dynamic text effect on the About section
- **Smooth Navigation** - Jump links to different sections of the page
- **Optimized Performance** - Fast loading with Next.js Image optimization

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Fonts**: Google Fonts (Poppins, Abril Fatface)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Resend API key (free tier available)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CarlyGallagher/taurus-portfolio.git
cd taurus-portfolio/taurus-portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Get your Resend API key:
   - Sign up at [resend.com](https://resend.com)
   - Go to [API Keys](https://resend.com/api-keys)
   - Create a new API key with "Sending access"
   - Copy the key to your `.env.local` file

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
taurus-portfolio-nextjs/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── features/
│   │   ├── TabSystem.tsx         # Skills/Education tabs
│   │   └── MobileMenu.tsx        # Mobile navigation
│   ├── layout/
│   │   ├── Header.tsx            # Hero section
│   │   ├── Navbar.tsx            # Navigation bar
│   │   └── Footer.tsx            # Footer
│   └── sections/
│       ├── About.tsx             # About section with bio
│       ├── Projects.tsx          # Project showcase
│       └── Contact.tsx           # Contact form
├── constants/
│   └── data.ts                   # Portfolio content & data
├── hooks/
│   ├── useTypewriter.ts          # Typewriter animation
│   └── useMediaQuery.ts          # Responsive breakpoints
└── public/
    └── images/                   # Image assets
```

## 🎨 Customization

### Update Personal Information

Edit `/constants/data.ts` to update:
- Skills and technologies
- Education history
- Projects
- Social media links
- Contact information
- Header text

### Change Colors

The color scheme is defined in `tailwind.config.ts`:
```typescript
colors: {
  bronze: {
    300: '#d8af85',
    400: '#c9995b',
    700: '#9a5803',
    800: '#804a03',
  }
}
```

### Modify Contact Form Recipient

Update the email address in `app/api/contact/route.ts`:
```typescript
to: 'your-email@example.com',
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. **Free Tier**: 3,000 emails/month, 100 emails/day
2. **Setup Time**: ~5 minutes
3. **From Email**: Uses `onboarding@resend.dev` (Resend's test domain)
4. **Reply-To**: Automatically set to sender's email for easy replies

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - `RESEND_API_KEY` = your API key
5. Deploy!

### Deploy to Netlify

1. Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. Add `RESEND_API_KEY` environment variable in Netlify dashboard
3. Deploy

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Carly Gallagher**

- Portfolio: [https://carlygallagherdev.netlify.app/]
- LinkedIn: [linkedin.com/in/Carly-gallagher-software-engineer](https://www.linkedin.com/in/Carly-gallagher-software-engineer/)
- GitHub: [@CarlyGallagher](https://github.com/CarlyGallagher)
- Instagram: [@carlyjgallagher](https://www.instagram.com/carlyjgallagher/)
- Email: carlygallagher22@gmail.com

---

⭐ If you found this project helpful, please consider giving it a star!

Built with ❤️ using Next.js and TypeScript

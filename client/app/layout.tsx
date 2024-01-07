import NavbarComponent from '@/components/ui/navbar.component';
import type { Metadata } from 'next';
import './globals.css';
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import FooterComponent from '@/components/ui/footer.component';
import { FaWhatsapp } from 'react-icons/fa';
import { Toaster } from 'sonner';
import { SnackbarProvider } from '@/components/alert/alert.context';

export const metadata: Metadata = {
  title: 'KustomParts',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SnackbarProvider>
          <NavbarComponent />
          <div>
            <div className="pb-[4.75rem] lg:pb-[3.80rem]"></div>
            {children}
          </div>
          <FooterComponent />

          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div className="bg-white rounded-md">
              <FaWhatsapp className="text-green-600 text-3xl " />
            </div>
          </div>
        </SnackbarProvider>
      </body>
    </html>
  );
}

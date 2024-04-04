import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-limu VAS',
  description: 'E-limu VAS',
  keywords: 'E-limu VAS',
};

async function page() {
  return (
    <main>
      <h1>Hello Again</h1>
    </main>
  );
}

export default page;

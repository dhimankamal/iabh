import Image from "next/image";
import logo from "@/lib/assets/logo.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="bg-white shadow-xl rounded-md p-6 text-center max-w-3xl">
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt="logo"
        />
        <h1 className="font-bold text-xl mb-4">
          Coming Soon...
        </h1>
        <h1 className="font-bold text-3xl mb-4">
          Indian Association of Behavioural Healthcare
        </h1>
        <p className="opacity-80">
          Indian Association of Behavioural Healthcare (IABH) is a collaborative
          community designed to unite professionals within the field of mental
          health, disability and other allied health. Committed to advancing the
          field, this association serves as a platform for knowledge exchange,
          professional development, and collective actions. IABH (Indian
          Association of Behavioural Healthcare) is a registered non-profitable
          and charitable body formed under section VIII with the Ministry of
          corporate affairs, Govt of India and in the process of registration
          for a trademark with Controller General of Patents, Designs & Trade
          Marks, under the Department of Industrial Promotion, Ministry of
          Commerce & Industry, Govt. of India. for providing a common platform
          for those dealing with scientific study and services concerning the
          mind and behaviour of people using different intervention modalities
          including Psychology, Psychiatry, Social work, counselling, Mental
          health nursing, special education and other allied health fields. The
          field of behavioural healthcare plays a crucial role in addressing
          mental health, Behavioural issues and substance abuse issues in
          individuals. As problems related to mental health and Behaviour
          continue to rise, it becomes essential to have a network of experts,
          researchers and professionals who are dedicated to providing the
          highest quality of research, care and support. Indian Association of
          Behavioural Healthcare, is a community-driven organization focused on
          connecting, educating, Training and advocating for behavioural
          healthcare professionals. Creating the provision of psychological
          services in the expanding role of behavioural healthcare interventions
          and the continuous development of new research that may be useful in
          the practice of psychology, present unique opportunities,
          considerations, and challenges to the practice. We aspire to excel as
          a valuable, effective, and influential academic organization advancing
          Behavioural Healthcare as an important for all. Our strategic goals
          shall include expanding psychology’s role in advancing mental health
          and increasing recognition of psychology nationally and
          internationally. The administration of the affairs of the Indian
          Association of Behavioural Healthcare shall vest with its Governing
          Council henceforth. All agreements, decisions and determinations
          lawfully made by the association in accordance with the provisions of
          the memorandum of association shall be deemed to be binding on all its
          members including office bearers and other governing council members.
        </p>
      </div>
    </main>
  );
}

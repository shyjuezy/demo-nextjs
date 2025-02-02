import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Streamline Your Workflow
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Boost productivity and collaboration with our all-in-one project
          management solution.
        </p>
        <Button size="lg" variant="secondary">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}

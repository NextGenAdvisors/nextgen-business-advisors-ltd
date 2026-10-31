import { describe, it, expect, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/config/site";
import { homeSchema } from "@/config/schema";

beforeAll(() => {
  // framer-motion's whileInView needs IntersectionObserver, which jsdom lacks.
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  Object.defineProperty(window, "IntersectionObserver", { writable: true, value: IO });
});

const renderFAQ = () =>
  render(
    <MemoryRouter>
      <FAQSection />
    </MemoryRouter>
  );

describe("FAQSection", () => {
  it("renders every question and every answer in the DOM, even while collapsed", () => {
    renderFAQ();
    for (const item of siteConfig.faq.items) {
      expect(screen.getByText(item.question)).toBeInTheDocument();
      expect(screen.getByText(item.answer)).toBeInTheDocument();
    }
  });

  it("uses native details/summary toggles that start closed", () => {
    const { container } = renderFAQ();
    const toggles = container.querySelectorAll("details");
    expect(toggles).toHaveLength(siteConfig.faq.items.length);
    toggles.forEach((d) => expect(d.open).toBe(false));
  });

  it("opens a toggle when its question is clicked", () => {
    const { container } = renderFAQ();
    const first = container.querySelector("details") as HTMLDetailsElement;
    fireEvent.click(first.querySelector("summary") as HTMLElement);
    expect(first.open).toBe(true);
  });

  it("has the faq anchor id for /#faq links", () => {
    const { container } = renderFAQ();
    expect(container.querySelector("section#faq")).not.toBeNull();
  });
});

describe("FAQPage schema", () => {
  it("mirrors the FAQ items rendered on the page", () => {
    const faqNode = homeSchema["@graph"].find(
      (n) => (n as { "@type"?: unknown })["@type"] === "FAQPage"
    ) as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] };
    expect(faqNode).toBeDefined();
    expect(faqNode.mainEntity).toHaveLength(siteConfig.faq.items.length);
    faqNode.mainEntity.forEach((q, i) => {
      expect(q.name).toBe(siteConfig.faq.items[i].question);
      expect(q.acceptedAnswer.text).toBe(siteConfig.faq.items[i].answer);
    });
  });
});

import { Testimonials } from "@/components/home/Testimonials";
import { ReviewButton } from "@/components/ReviewButton";

/**
 * The site's review section, with the review button directly under the reviews.
 * id="review" is the target for https://valora-construction.com/#review; the review button's own
 * script opens its rating popup when the URL carries #review. Render once per page.
 */
export function Reviews() {
  return (
    <div id="review" className="scroll-mt-20">
      <Testimonials after={<ReviewButton />} />
    </div>
  );
}

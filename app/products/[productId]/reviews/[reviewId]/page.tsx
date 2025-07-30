export default async function ProductReview({
    params,
}: {
    params: Promise<{ reviewId: string, productId: string,}>
}) {
    const { reviewId, productId} = await params
     return (
        <h1>Review {reviewId} for Product {productId}</h1>
     )
}
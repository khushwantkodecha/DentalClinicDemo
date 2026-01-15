'use server'

export async function submitBooking(formData: FormData) {
    // Simulate network delay to mimic a real backend 
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would validate data and send emails here.
    // Example: 
    // const name = formData.get('name');
    // const email = formData.get('email');
    // await resend.emails.send({ ... })

    return {
        success: true,
        message: "Booking received! We will contact you shortly."
    };
}

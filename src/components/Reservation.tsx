import { motion } from 'framer-motion';
import Image from 'next/image';

const ReservationSection = () => {
  return (
    <section id="reservation" className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="reservation-card">
        <Image src="/BookYourTable_Reservation.png" alt="Book Your Table" width={300} height={200} />
        <h2 className="reservation-title">Book Your Table</h2>
        <p className="reservation-description">Reserve your spot with ease using our online booking system.</p>
        <button className="cta-button">Reserve Now</button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="reservation-card">
        <Image src="/PrivateEvents_Reservation.png" alt="Private Events" width={300} height={200} />
        <h2 className="reservation-title">Private Events</h2>
        <p className="reservation-description">Host your special occasions in our exclusive dining spaces.</p>
        <button className="cta-button">Inquire Now</button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="reservation-card">
        <Image src="/SpecialRequests_Reservation.png" alt="Special Requests" width={300} height={200} />
        <h2 className="reservation-title">Special Requests</h2>
        <p className="reservation-description">Let us know any dietary restrictions or celebration notes.</p>
        <button className="cta-button">Request Now</button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="reservation-card">
        <Image src="/Confirmation_Reservation.png" alt="Confirmation" width={300} height={200} />
        <h2 className="reservation-title">Confirmation</h2>
        <p className="reservation-description">Receive instant confirmation via email or text message.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="reservation-card">
        <Image src="/CancellationPolicy_Reservation.png" alt="Cancellation Policy" width={300} height={200} />
        <h2 className="reservation-title">Cancellation Policy</h2>
        <p className="reservation-description">Understand our hassle-free cancellation process.</p>
      </motion.div>
    </section>
  );
};

export default ReservationSection;
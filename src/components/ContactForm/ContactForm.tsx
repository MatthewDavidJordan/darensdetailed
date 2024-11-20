import { useState, ChangeEvent, FormEvent } from "react";
import "./ContactForm.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  services: {
    exterior: {
      exteriorDetail: boolean;
      handWax: boolean;
      clayBarDecontamination: boolean;
      engineDetail: boolean;
      headlightRestoration: boolean;
      blackTrimRestoration: boolean;
      paintEnhancement: boolean;
      ceramicCoating: boolean;
    };
    interior: {
      interiorDetail: boolean;
      shampooCarpetsSeats: boolean;
      odorRemoval: boolean;
      deepSteamCleaning: boolean;
    };
  };
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    services: {
      exterior: {
        exteriorDetail: false,
        handWax: false,
        clayBarDecontamination: false,
        engineDetail: false,
        headlightRestoration: false,
        blackTrimRestoration: false,
        paintEnhancement: false,
        ceramicCoating: false,
      },
      interior: {
        interiorDetail: false,
        shampooCarpetsSeats: false,
        odorRemoval: false,
        deepSteamCleaning: false,
      },
    },
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const [category, service] = name.split(".");

      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [category]: {
            ...prev.services[category as keyof typeof prev.services],
            [service]: checkbox.checked,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          services: {
            exterior: {
              exteriorDetail: false,
              handWax: false,
              clayBarDecontamination: false,
              engineDetail: false,
              headlightRestoration: false,
              blackTrimRestoration: false,
              paintEnhancement: false,
              ceramicCoating: false,
            },
            interior: {
              interiorDetail: false,
              shampooCarpetsSeats: false,
              odorRemoval: false,
              deepSteamCleaning: false,
            },
          },
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Get in touch</h2>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="services-section">
        <h3>Exterior Services</h3>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.exteriorDetail"
              checked={formData.services.exterior.exteriorDetail}
              onChange={handleChange}
            />
            <label>Exterior Detail</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.handWax"
              checked={formData.services.exterior.handWax}
              onChange={handleChange}
            />
            <label>Hand Wax</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.clayBarDecontamination"
              checked={formData.services.exterior.clayBarDecontamination}
              onChange={handleChange}
            />
            <label>Clay Bar & Iron Decontamination</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.engineDetail"
              checked={formData.services.exterior.engineDetail}
              onChange={handleChange}
            />
            <label>Engine Detail</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.headlightRestoration"
              checked={formData.services.exterior.headlightRestoration}
              onChange={handleChange}
            />
            <label>Head Light Restoration</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.blackTrimRestoration"
              checked={formData.services.exterior.blackTrimRestoration}
              onChange={handleChange}
            />
            <label>Black Trim Restoration</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.paintEnhancement"
              checked={formData.services.exterior.paintEnhancement}
              onChange={handleChange}
            />
            <label>Paint Enhancement (Polish)</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="exterior.ceramicCoating"
              checked={formData.services.exterior.ceramicCoating}
              onChange={handleChange}
            />
            <label>Ceramic Coating</label>
          </div>
        </div>

        <h3>Interior Services</h3>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="interior.interiorDetail"
              checked={formData.services.interior.interiorDetail}
              onChange={handleChange}
            />
            <label>Interior Detail</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="interior.shampooCarpetsSeats"
              checked={formData.services.interior.shampooCarpetsSeats}
              onChange={handleChange}
            />
            <label>Shampoo Carpets/Seats</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="interior.odorRemoval"
              checked={formData.services.interior.odorRemoval}
              onChange={handleChange}
            />
            <label>Odor Removal</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="interior.deepSteamCleaning"
              checked={formData.services.interior.deepSteamCleaning}
              onChange={handleChange}
            />
            <label>Deep Steam Cleaning</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Additional Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;

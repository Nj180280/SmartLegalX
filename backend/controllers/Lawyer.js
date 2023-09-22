import Lawyer from "../models/Lawyer.js";
import cloudinary from '../config/cloudinary.js'; // Import the Cloudinary configuration

export const createLawyer = async (req, res, next) => {
  const { email, name, phone, yearOfExperience } = req.body;
  const profileImage = req.files.profileImage[0];
  const idCard = req.files.idCard[0];

  try {
    // Upload profileImage to Cloudinary
    const profileImageResult = await cloudinary.uploader.upload(profileImage.path);

    // Upload idCard to Cloudinary
    const idCardResult = await cloudinary.uploader.upload(idCard.path);

    const newLawyer = new Lawyer({
      email,
      name,
      phone,
      yearOfExperience,
      profileImage: profileImageResult.secure_url,
      idCard: idCardResult.secure_url,
    });

    const savedLawyer = await newLawyer.save();
    res.status(200).json(savedLawyer);
  } catch (err) {
    next(err);
  }
};


export const deleteLawyer = async (req, res, next) => {
  try {
    await Lawyer.findByIdAndDelete(req.params.id);
    res.status(200).json("Lawyer has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getLawyer = async (req, res, next) => {
  try {
    const Lawyer = await Lawyer.findById(req.params.id);
    res.status(200).json(Lawyer);
  } catch (err) {
    next(err);
  }
};

export const getLawyers = async (req, res, next) => {
  const { city } = req.query;

  try {
    let query = Lawyer.find();
    
    if (city) {
      query = query.where({ city }); // Apply city filter if provided
    }

    const lawyers = await query.exec();

    if (lawyers.length === 0) {
      return res.status(404).json({ error: "No lawyers found." });
    }

    const lawyersWithImages = await Promise.all(
      lawyers.map(async (lawyer) => {
        // Retrieve the image URLs from Cloudinary
        const profileImage = await cloudinary.url(lawyer.profileImage, { secure: true });
        const idCard = await cloudinary.url(lawyer.idCard, { secure: true });

        // Create a new lawyer object with image URLs
        return {
          ...lawyer._doc,
          profileImage,
          idCard,
        };
      })
    );

    res.status(200).json(lawyersWithImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};



// export const getLawyers = async (req, res, next) => {
//   const { city } = req.query;

//   try {
//     if (city) {
//       const lawyers = await Lawyer.find({ city });
//       const lawyersWithImages = await Promise.all(
//         lawyers.map(async (lawyer) => {
//           // Retrieve the image URLs from Cloudinary
//           const profileImage = await cloudinary.url(lawyer.profileImage, { secure: true });
//           const idCard = await cloudinary.url(lawyer.idCard, { secure: true });

//           // Create a new lawyer object with image URLs
//           return {
//             ...lawyer._doc,
//             profileImage,
//             idCard,
//           };
//         })
//       );
//       res.status(200).json(lawyersWithImages);
//     }

//     else {
//       const lawyers = await Lawyer.find();
//       const lawyersWithImages = await Promise.all(
//         lawyers.map(async (lawyer) => {
//           // Retrieve the image URLs from Cloudinary
//           const profileImage = await cloudinary.url(lawyer.profileImage, { secure: true });
//           const idCard = await cloudinary.url(lawyer.idCard, { secure: true });

//           // Create a new lawyer object with image URLs
//           return {
//             ...lawyer._doc,
//             profileImage,
//             idCard,
//           };
//         })
//       );
//       res.status(200).json(lawyersWithImages);
//     }
//   }

//   catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };

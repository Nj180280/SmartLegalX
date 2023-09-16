import Lawyer from "../models/Lawyer.js";

export const createLawyer = async (req, res, next) => {
  const newLawyer = new Lawyer(req.body);
  try {
    const savedLawyer = await newLawyer.save();
    res.status(200).json(savedLawyer);
  } catch (err) {
    next(err);
  }
};



export const updateLawyer = async (req, res, next) => {
  try {
    const updatedLawyer = await Lawyer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedLawyer);
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

export const topLawyers = async (req, res, next) => {
  try {
    const Lawyers = await Lawyer.find();

    Lawyers.sort((a, b) => {
      const ratingA = parseFloat(a.rating.split("/")[0]);
      const ratingB = parseFloat(b.rating.split("/")[0]);
      return ratingB - ratingA;
    });
    const top6Lawyers = Lawyers.slice(0, 6);
    res.status(200).json(top6Lawyers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};


export const getLawyers = async (req, res, next) => {
  const { city } = req.query;
  try {
    if (city) {
      const Lawyers = await Lawyer.find({ city });
      res.status(200).json(Lawyers);
    }
    else {
      const Lawyers = await Lawyer.find();
      res.status(200).json(Lawyers);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const addReview = async (req, res, next) => {
  try {
    const { LawyerId,userName, content, rating } = req.body;

    const Lawyer = await Lawyer.findById(LawyerId);

    if (!Lawyer) {
      return res.status(404).json({ message: 'Lawyer not found' });
    }

    const newReview = {
      userName,
      content,
      rating,
    };

    Lawyer.reviews.push(newReview);

    // Calculate the new average rating for the Lawyer based on the appended review
    const totalReviews = Lawyer.reviews.length;
    const totalRating = Lawyer.reviews.reduce((sum, review) => sum + review.rating, 0);
    const updatedRating = (totalRating / totalReviews).toFixed(1);
    Lawyer.rating = `${updatedRating} /5`;

    await Lawyer.save();

    res.status(200).json({ message: 'Review added successfully', Lawyer });
  } catch (error) {
    next(error);
  }
};


// export const getLawyers = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const query = {
//       ...others,
//       cheapestPrice: { $gt: min || 1, $lt: max || 325436478 },
//     };
//     const Lawyers = await Lawyer.find(query).limit(parseInt(req.query.limit));
//     res.status(200).json(Lawyers);
//   } catch (err) {
//     next(err);
//   }
// };

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map((city) => Lawyer.countDocuments({ city })));
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const counts = await Lawyer.aggregate([
      { $group: { _id: "$type", count: { $sum: 1 } } },
      { $project: { type: "$_id", count: 1, _id: 0 } },
    ]);
    res.status(200).json(counts);
  } catch (err) {
    next(err);
  }
};

export const getLawyerRooms = async (req, res, next) => {
  try {
    const Lawyer = await Lawyer.findById(req.params.id);
    const roomPromises = Lawyer.rooms.map((roomId) => Room.findById(roomId));
    const rooms = await Promise.all(roomPromises);
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};



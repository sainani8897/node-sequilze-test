import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Vechile } from '../../models';
import { VechileTrackingHistory } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';
const { Op } = require("sequelize");

export const index = async (req, res) => {
  try {
    let where = {};
    
    if (req.query.vechileNo)
        where.vechileNo = req.query.vechileNo
    
    const page = req.params.page || 1;
    const limit = req.page_limit ? req.page_limit : 10;
    const vechiles = await Vechile.findAndCountAll({
      where,
      order: [['createdAt', 'DESC']],
      offset: (page - 1) * limit,
      limit,
      include:['history'],
    });
    return successResponse(req, res, { vechiles });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};


export const create = async (req, res) => {
  try {
    const payload = req.body;
    const vechile = await Vechile.create({
      vechileNo: payload.vechile_no,
      currentLocation: payload.location,
      currentLatitude: payload.latitude,
      currentLongitude: payload.longitude,
    });

    const vechileHis = await VechileTrackingHistory.create({
      vechileId: vechile.id,
      location: payload.location,
      latitude: payload.latitude,
      logitude: payload.longitude,
    });

    return successResponse(req, res, { vechile });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const update = async (req, res) => {
  try {
    const payload = req.body;
    const id = payload.id;

    const vechile = await Vechile.findByPk(id);

    if (!vechile) {
      return errorResponse(req, res, "Data not found!", 404);
    }

    await vechile.update({
      vechileNo: payload.vechile_no,
      currentLocation: payload.location,
      currentLatitude: payload.latitude,
      currentLongitude: payload.longitude,
    });

    const vechileHis = await VechileTrackingHistory.create({
      vechileId: vechile.id,
      location: payload.location,
      latitude: payload.latitude,
      logitude: payload.longitude,
    });

    return successResponse(req, res, { vechile });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};


export const getVechilePostions = async (req, res) => {
  try {
    let where = {};
        
    const vechileNo = req.params.vechileNo;
    const vechile = await Vechile.findOne({where: { vechileNo:vechileNo }});

    if (!vechile) {
      return errorResponse(req, res, "Data not found!", 404);
    }
    
    where.vechileId = vechile.id;

    if (req.query.from)
      where.createdAt = {$gte: new Date(req.query.from)};
    
    if (req.query.to)
      where.createdAt = {$lte: new Date(req.query.to)};
    
    if (req.query.to) {
      where.to = {$lt: req.query.to};
    }
    
    if (req.query.to)
      where.to = req.query.to
    

    const page = req.params.page || 1;
    const limit = req.page_limit ? req.page_limit : 10;
    const vechiles = await VechileTrackingHistory.findAndCountAll({
      where,
      order: [['createdAt', 'DESC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { vechiles });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};



var usermodel = require('../model/loginmodel')

exports.register = async (req, res) => {

    var data = await usermodel.create(req.body);

    res.status(200).json({
        status: 'success',
        data
    });
}

exports.select = async (req, res) => {

    var data = await usermodel.find();

    res.status(200).json({
        status: 'success',
        data
    });
}

exports.delete_data = async (req, res) => {

    var id = req.params.id;

    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status: 'success',
    });
}

exports.updata_data = async (req, res) => {

    var id = req.params.id;

    var data = await usermodel.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: 'DATA update success',
        data
    });
}
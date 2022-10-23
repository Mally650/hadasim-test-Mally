const con = require('../config/DB');
module.exports.GetPatient = (req, res) => {
    try {
        let { id } = req.params;
        con.query(`select * from patients where p_id='${id}'`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                if (result != [])
                    res.status(200).send(result);
                else
                    res.status(401).send('the id isnt exist');
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.GetPatients = (req, res) => {
    try {
        con.query(`select * from patients`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.GetVaccination = (req, res) => {
    try {
        let { id } = req.params;
        con.query(`select * from vaccinations where v_pid='${id}'`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.AddVaccination = (req, res) => {
    try {
        let { id, manufactor, date } = req.body;
        con.query(`insert into vaccinations (v_pid,v_manufacturer,v_date)values('${id}','${manufactor}','${date}')`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.DeleteVaccine = (req, res) => {
    try {
        let { code, id } = req.params;
        con.query(`delete from vaccinations where v_code =${code};`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                con.query(`select * from vaccinations where v_pid='${id}';`, (err, result) => {
                    if (err) {
                        res.status(404).send('the details are not correct!');
                    } else {
                        res.status(200).send(result);
                    }
                }
                );
            }
        })
    }
    catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.DeleteMorbidity = (req, res) => {
    try {
        let { code, id } = req.params;
        con.query(`delete from morbidity where m_code =${code};`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                con.query(`select * from morbidity where m_pid='${id}';`, (err, result) => {
                    if (err) {
                        res.status(404).send('the details are not correct!');
                    } else {
                        res.status(200).send(result);
                    }
                }
                );
            }
        })
    }
    catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.AddMorbidity = (req, res) => {
    try {
        let { id, datep, dater } = req.body;
        con.query(`insert into morbidity (m_pid,m_dateOfPositiveTest,m_dateOfRecovery)values('${id}','${datep}','${dater}')`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.GetMorbidity = (req, res) => {
    try {
        let { id } = req.params;
        con.query(`select * from morbidity where m_pid='${id}'`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.DeletePatient = (req, res) => {
    try {
        let { id } = req.params;
        con.query(`delete from morbidity where m_pid ='${id}';`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                con.query(`delete from vaccinations where v_pid ='${id}';`, (err, result) => {
                    if (err) {
                        res.status(404).send('the details are not correct!');
                    } else {
                        con.query(`delete from patients where p_id ='${id}';`, (err, result) => {
                            if (err) {
                                res.status(404).send('the details are not correct!');
                            } else {
                                con.query(`select * from patients;`, (err, result) => {
                                    if (err) {
                                        res.status(404).send('the details are not correct!');
                                    } else {
                                        res.status(200).send(result);
                                    }
                                }
                                );
                            }
                        }
                        );
                    }
                }
                );
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}

module.exports.AddPatient = (req, res) => {
    try {
        let { id, firstName, LastName, address, city, houseNum, birthDate, phone, cellphone } = req.body;
        con.query(`INSERT INTO patients values('${id}','${firstName}','${LastName}','${address}','${city}',${houseNum},'${birthDate}','${phone}','${cellphone}');`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}

module.exports.UpdatePatient = (req, res) => {
    try {
        let { id, firstName, LastName, address, city, houseNum, birthDate, phone, cellphone } = req.body;
        con.query(`update patients 
        set p_firstName='${firstName}'
        , p_lastName='${LastName}'
        , p_address='${address}'
        , p_city='${city}'
        , p_houseNum=${houseNum}
        ,p_birthDate='${birthDate}'
        ,p_phone='${phone}'
        ,p_cellphone='${cellphone}'
        where p_id='${id}'`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct!');
            } else {
                res.status(200).send(result);
            }
        }
        );
    } catch (err) {
        res.status(404).send('the details are not correct!');
    }
}
module.exports.GetNotVaccined = (req, res) => {
    con.query(`select count(*) as cnt
    from patients
    where p_id not in (select distinct v_pid 
    from vaccinations)`, (err, result) => {
        if (err) {
            res.status(404).send('the details are not correct!');
        } else {
            res.status(200).send(result);
        }
    })
}
module.exports.GetPositiveByDay = (req, res) => {
    let month = req.params.m
    con.query(`
    select m_dateOfPositiveTest,count(*) as cnt
    from morbidity
    where month(m_dateOfPositiveTest)=${month}
    group by m_dateOfPositiveTest;`, (err, result) => {
        if (err) {
            res.status(404).send('the details are not correct!');
        } else {
            res.status(200).send(result);
        }
    })
}

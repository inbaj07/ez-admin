const program_formate = require('../program/program_formate')
const position_formate = require('../position/position_formate')
const role_formate = require('../role/role_formate')
const department_formate = require('../department/department_formate')
const common_fun = require('../utility/common_functions')

module.exports = {
  user: (doc) => {
    const formate_obj = []
    doc.forEach(element => {
      const obj = {
        _id: element._id,
        name: {
          first: element.name.first,
          middle: element.name.middle,
          last: element.name.last,
          family: element.name.family
        },
        employee_id: element.employee_id,
        gender: element.gender,
        mobile: element.mobile,
        mailID: element.mailID,
        nationality: element.nationality,
        nationality_id: element.nationality_id,
        deviceID: element.deviceID,
        face_reg_status: element.face_reg_status,
        device_token: element.device_token,
        os: element.os,
        verified_status: element.verified_status,
        isDeleted: element.isDeleted,
        program: program_formate.program_ID_Only(element.program),
        position: position_formate.position_ID_Only(element.position),
        department: department_formate.department_ID_Only(element.department),
        role: role_formate.role_ID_Array_Only(element.role),
        availability_type: element.availability_type,
        availability_days: element.availability_days
      }
      formate_obj.push(obj)
    })
    return formate_obj
  },

  // user_ID: (doc) => {
  //     let obj = {
  //         _id: doc._id,
  //         name: {
  //             'first': doc.name.first,
  //             'middle': doc.name.middle,
  //             'last': doc.name.last,
  //             'family': doc.name.family,
  //         },
  //         employee_id: doc.employee_id,
  //         gender: doc.gender,
  //         mobile: doc.mobile,
  //         mailID: doc.mailID,
  //         nationality: doc.nationality,
  //         nationality_id: doc.nationality_id,
  //         deviceID: doc.deviceID,
  //         face_reg_status: doc.face_reg_status,
  //         device_token: doc.device_token,
  //         os: doc.os,
  //         verified_status: doc.verified_status,
  //         isDeleted: doc.isDeleted,
  //         program: program_formate.program_ID_Only(doc.program),
  //         position: position_formate.position_ID_Only(doc.position),
  //         department: department_formate.department_ID_Only(doc.department),
  //         role: role_formate.role_ID_Array_Only(doc.role),
  //         availability_type: doc.availability_type,
  //         availability_days: doc.availability_days
  //     }
  //     return obj;
  // },

  user_ID_Only: (doc) => {
    const obj = {
      _id: doc._id,
      name: {
        first: doc.name.first,
        middle: doc.name.middle,
        last: doc.name.last,
        family: common_fun.show_null_empty_Undefined(doc.name.family)
      },
      employee_id: doc.employee_id,
      gender: doc.gender,
      mobile: doc.mobile,
      mailID: doc.mailID,
      nationality: common_fun.show_null_empty_Undefined(doc.nationality),
      nationality_id: doc.nationality_id,
      deviceID: doc.deviceID,
      face_reg_status: doc.face_reg_status,
      device_token: doc.device_token,
      os: doc.os,
      verified_status: doc.verified_status,
      isDeleted: doc.isDeleted,
      program: doc._program_id,
      position: doc._position_id,
      department: doc._department_id,
      role: doc._role_id,
      availability_type: doc.availability_type,
      availability_days: doc.availability_days
    }
    return obj
  },

  user_ID_Array_Only: (doc) => {
    const formate_obj = []
    doc.forEach(element => {
      const obj = {
        _id: element._id,
        name: {
          first: element.name.first,
          middle: element.name.middle,
          last: element.name.last,
          family: element.name.family
        },
        employee_id: element.employee_id,
        gender: element.gender,
        mobile: element.mobile,
        mailID: element.mailID,
        nationality: element.nationality,
        nationality_id: element.nationality_id,
        deviceID: element.deviceID,
        face_reg_status: element.face_reg_status,
        device_token: element.device_token,
        os: element.os,
        verified_status: element.verified_status,
        isDeleted: element.isDeleted,
        program: element._program_id,
        position: element._position_id,
        department: element._department_d,
        role: element.role_id,
        availability_type: element.availability_type,
        availability_days: element.availability_days
      }
      formate_obj.push(obj)
    })
    return formate_obj
  },

  user_list_array: (doc) => {
    const formate_obj = []
    doc.forEach(element => {
      const obj = {
        _id: element._id,
        username: element.username,
        employee_id: element.employee_id,
        email: element.email,
        name: {
          first: element.name.first,
          middle: element.name.middle,
          last: element.name.last,
          family: element.name.family || ''
        },
        gender: element.gender,
        address: {
          nationality_id: element.address.nationality_id
        },
        status: element.status || ''
      }
      formate_obj.push(obj)
    })
    return formate_obj
  },

  user_ID: (doc) => {
    let obj = {}
    if (doc.user_type == 'staff') {
      obj = {
        _id: common_fun.check_value_or_null(doc, '_id') || '',
        name: {
          first: common_fun.check_value_or_null(doc, 'name.first') || '',
          middle: common_fun.check_value_or_null(doc, 'name.middle') || '',
          last: common_fun.check_value_or_null(doc, 'name.last') || '',
          family: common_fun.check_value_or_null(doc, 'name.family') || ''
        },
        user_type: doc.user_type,
        employee_id: common_fun.check_value_or_null(doc, 'user_id') || '',
        gender: common_fun.check_value_or_null(doc, 'gender') || '',
        email: common_fun.check_value_or_null(doc, 'email') || '',
        username: common_fun.check_value_or_null(doc, 'username') || '',
        dob: common_fun.check_value_or_null(doc, 'dob') || '',
        mobile: common_fun.check_value_or_null(doc, 'mobile') || '',
        enrollment_year: common_fun.check_value_or_null(doc, 'enrollment_year') || '',
        // _employee_id_doc: common_fun.check_value_or_null(doc, '_employee_id_doc') || '',
        id_doc: {
          _employee_id_doc: common_fun.check_value_or_null(doc, 'id_doc._employee_id_doc') || ''
        },
        address: {
          nationality_id: common_fun.check_value_or_null(doc, 'address.nationality_id') || '',
          // _nationality_id:common_fun.check_value_or_null(doc,'address._nationality_id') || '',
          _nationality_id: common_fun.check_value_or_null(doc, 'country.name') || '',
          _nationality_id_doc: common_fun.check_value_or_null(doc, 'address._nationality_id_doc') || '',
          building: common_fun.check_value_or_null(doc, 'address.building') || '',
          city: common_fun.check_value_or_null(doc, 'address.city') || '',
          district: common_fun.check_value_or_null(doc, 'address.district') || '',
          zip_code: common_fun.check_value_or_null(doc, 'address.zip_code') || '',
          unit: common_fun.check_value_or_null(doc, 'address.unit') || '',
          street_no: common_fun.check_value_or_null(doc, 'address.street_no') || '',
          passport_no: common_fun.check_value_or_null(doc, 'address.passport_no') || '',
          _address_doc: common_fun.check_value_or_null(doc, 'address._address_doc')
        },
        office: {
          office_extension: common_fun.check_value_or_null(doc, 'office.office_extension') || '',
          office_room_no: common_fun.check_value_or_null(doc, 'office.office_room_no') || ''
        },
        enrollment: {
          _appointment_order_doc: common_fun.check_value_or_null(doc, 'enrollment._appointment_order_doc') || ''
        },
        qualifications: common_fun.check_value_or_null(doc, 'qualifications') || '',
        correction_first_name: common_fun.check_value_or_null(doc, 'correction_first_name') || false,
        correction_middle_name: common_fun.check_value_or_null(doc, 'correction_middle_name') || false,
        correction_last_name: common_fun.check_value_or_null(doc, 'correction_last_name') || false,
        correction_gender: common_fun.check_value_or_null(doc, 'correction_gender') || false,
        correction_employee_id: common_fun.check_value_or_null(doc, 'correction_employee_id') || false,
        correction_nationality_id: common_fun.check_value_or_null(doc, 'correction_nationality_id') || false,

        role: common_fun.check_value_or_null(doc, 'role') || '',
        status: common_fun.check_value_or_null(doc, 'status') || '',
        isActive: common_fun.check_value_or_null(doc, 'isActive'),
        isDeleted: common_fun.check_value_or_null(doc, 'isDeleted')
      }
    } else if (doc.user_type == 'student') {
      obj = {
        _id: common_fun.check_value_or_null(doc, '_id') || '',
        name: {
          first: common_fun.check_value_or_null(doc, 'name.first') || '',
          middle: common_fun.check_value_or_null(doc, 'name.middle') || '',
          last: common_fun.check_value_or_null(doc, 'name.last') || '',
          family: common_fun.check_value_or_null(doc, 'name.family') || ''
        },
        user_type: doc.user_type,
        academic: common_fun.check_value_or_null(doc, 'user_id') || '',
        gender: common_fun.check_value_or_null(doc, 'gender') || '',
        email: common_fun.check_value_or_null(doc, 'email') || '',
        batch: common_fun.check_value_or_null(doc, 'batch') || '',
        enrollment_year: common_fun.check_value_or_null(doc, 'enrollment_year') || '',
        // username: common_fun.check_value_or_null(doc, 'username') || '',
        dob: common_fun.check_value_or_null(doc, 'dob') || '',
        mobile: common_fun.check_value_or_null(doc, 'mobile') || '',
        // _employee_id_doc: common_fun.check_value_or_null(doc, '_employee_id_doc') || '',
        address: {
          nationality_id: common_fun.check_value_or_null(doc, 'address.nationality_id') || '',
          // _nationality_id:common_fun.check_value_or_null(doc,'address._nationality_id') || '',
          _nationality_id: common_fun.check_value_or_null(doc, 'country.name') || '',
          _nationality_id_doc: common_fun.check_value_or_null(doc, 'address._nationality_id_doc') || '',
          building: common_fun.check_value_or_null(doc, 'address.building') || '',
          city: common_fun.check_value_or_null(doc, 'address.city') || '',
          district: common_fun.check_value_or_null(doc, 'address.district') || '',
          zip_code: common_fun.check_value_or_null(doc, 'address.zip_code') || '',
          unit: common_fun.check_value_or_null(doc, 'address.unit') || '',
          street_no: common_fun.check_value_or_null(doc, 'address.street_no') || '',
          passport_no: common_fun.check_value_or_null(doc, 'address.passport_no') || '',
          _address_doc: common_fun.check_value_or_null(doc, 'address._address_doc')
        },
        // enrollment_year: common_fun.check_value_or_null(doc, 'enrollment_year') || '',
        program_no: common_fun.check_value_or_null(doc, 'program_name') || '',
        id_doc: {
          _college_id_doc: common_fun.check_value_or_null(doc, 'id_doc._college_id_doc') || ''
        },
        student_docs: {
          _school_certificate_doc: common_fun.check_value_or_null(doc, 'student_docs._school_certificate_doc') || '',
          _entrance_exam_certificate_doc: common_fun.check_value_or_null(doc, 'student_docs._entrance_exam_certificate_doc') || ''

        },
        enrollment: {
          _admission_order_doc: common_fun.check_value_or_null(doc, 'enrollment._admission_order_doc') || ''
        },
        contact: common_fun.check_value_or_null(doc, 'contact') || '',
        // office: {
        //     office_extension: common_fun.check_value_or_null(doc, 'office.office_extension') || '',
        //     office_room_no: common_fun.check_value_or_null(doc, 'office.office_room_no') || ''
        // },
        // qualifications: common_fun.check_value_or_null(doc, 'qualifications') || '',
        correction_first_name: common_fun.check_value_or_null(doc, 'correction_first_name') || false,
        correction_middle_name: common_fun.check_value_or_null(doc, 'correction_middle_name') || false,
        correction_last_name: common_fun.check_value_or_null(doc, 'correction_last_name') || false,
        correction_gender: common_fun.check_value_or_null(doc, 'correction_gender') || false,
        correction_academic_no: common_fun.check_value_or_null(doc, 'correction_academic_no') || false,
        correction_nationality_id: common_fun.check_value_or_null(doc, 'correction_nationality_id') || false,
        correction_enrollment_year: common_fun.check_value_or_null(doc, 'correction_enrollment_year') || false,
        correction_program_no: common_fun.check_value_or_null(doc, 'correction_program_no') || false,

        role: common_fun.check_value_or_null(doc, 'role') || '',
        status: common_fun.check_value_or_null(doc, 'status') || '',
        isActive: common_fun.check_value_or_null(doc, 'isActive'),
        isDeleted: common_fun.check_value_or_null(doc, 'isDeleted')
      }
    }
    return obj
  },

  user_list_formate: (element) => {
    const formate_obj = []
    let obj = {}
    element.forEach(doc => {
      // console.log(doc);
      if (doc.user_type == 'staff') {
        obj = {
          _id: common_fun.check_value_or_null(doc, '_id') || '',
          name: {
            first: common_fun.check_value_or_null(doc, 'name.first') || '',
            middle: common_fun.check_value_or_null(doc, 'name.middle') || '',
            last: common_fun.check_value_or_null(doc, 'name.last') || '',
            family: common_fun.check_value_or_null(doc, 'name.family') || ''
          },
          user_type: doc.user_type,
          employee_id: common_fun.check_value_or_null(doc, 'user_id') || '',
          gender: common_fun.check_value_or_null(doc, 'gender') || '',
          email: common_fun.check_value_or_null(doc, 'email') || '',
          username: common_fun.check_value_or_null(doc, 'username') || '',
          dob: common_fun.check_value_or_null(doc, 'dob') || '',
          mobile: common_fun.check_value_or_null(doc, 'mobile') || '',
          address: {
            nationality_id: common_fun.check_value_or_null(doc, 'address.nationality_id') || ''
          },
          role: common_fun.check_value_or_null(doc, 'role') || '',
          status: common_fun.check_value_or_null(doc, 'status') || '',
          isActive: common_fun.check_value_or_null(doc, 'isActive'),
          isDeleted: common_fun.check_value_or_null(doc, 'isDeleted')
        }
      } else if (doc.user_type == 'student') {
        obj = {
          _id: common_fun.check_value_or_null(doc, '_id') || '',
          name: {
            first: common_fun.check_value_or_null(doc, 'name.first') || '',
            middle: common_fun.check_value_or_null(doc, 'name.middle') || '',
            last: common_fun.check_value_or_null(doc, 'name.last') || '',
            family: common_fun.check_value_or_null(doc, 'name.family') || ''
          },
          user_type: doc.user_type,
          academic: common_fun.check_value_or_null(doc, 'user_id') || '',
          gender: common_fun.check_value_or_null(doc, 'gender') || '',
          email: common_fun.check_value_or_null(doc, 'email') || '',
          batch: common_fun.check_value_or_null(doc, 'batch') || '',
          enrollment_year: common_fun.check_value_or_null(doc, 'enrollment_year') || '',
          dob: common_fun.check_value_or_null(doc, 'dob') || '',
          mobile: common_fun.check_value_or_null(doc, 'mobile') || '',
          address: {
            nationality_id: common_fun.check_value_or_null(doc, 'address.nationality_id') || ''
          },
          role: common_fun.check_value_or_null(doc, 'role') || '',
          program_no: common_fun.check_value_or_null(doc, 'program_name') || '',
          status: common_fun.check_value_or_null(doc, 'status') || '',
          isActive: common_fun.check_value_or_null(doc, 'isActive'),
          isDeleted: common_fun.check_value_or_null(doc, 'isDeleted')
        }
      }
      formate_obj.push(obj)
      // return obj;
    })
    return formate_obj
  },

  user_id_formate: (doc) => {
    let obj = {}
    if (doc.user_type != undefined && doc.user_type == 'staff') {
      obj = {
        _id: common_fun.check_value_or_null(doc, '_id') || '',
        name: {
          first: common_fun.check_value_or_null(doc, 'name.first') || '',
          middle: common_fun.check_value_or_null(doc, 'name.middle') || '',
          last: common_fun.check_value_or_null(doc, 'name.last') || '',
          family: common_fun.check_value_or_null(doc, 'name.family') || ''
        },
        user_type: doc.user_type,
        employee_id: common_fun.check_value_or_null(doc, 'user_id') || '',
        gender: common_fun.check_value_or_null(doc, 'gender') || '',
        email: common_fun.check_value_or_null(doc, 'email') || '',
        username: common_fun.check_value_or_null(doc, 'username') || '',
        dob: common_fun.check_value_or_null(doc, 'dob') || '',
        mobile: common_fun.check_value_or_null(doc, 'mobile') || '',
        address: {
          nationality_id: common_fun.check_value_or_null(doc, 'address.nationality_id') || ''
        },
        role: common_fun.check_value_or_null(doc, 'role') || '',
        status: common_fun.check_value_or_null(doc, 'status') || '',
        isActive: common_fun.check_value_or_null(doc, 'isActive'),
        isDeleted: common_fun.check_value_or_null(doc, 'isDeleted')
      }
    } else if (doc.user_type != undefined && doc.user_type == 'student') {
      obj = {
        _id: common_fun.check_value_or_null(doc, '_id') || '',
        name: {
          first: common_fun.check_value_or_null(doc, 'name.first') || '',
          middle: common_fun.check_value_or_null(doc, 'name.middle') || '',
          last: common_fun.check_value_or_null(doc, 'name.last') || '',
          family: common_fun.check_value_or_null(doc, 'name.family') || ''
        },
        user_type: doc.user_type,
        academic: common_fun.check_value_or_null(doc, 'user_id') || '',
        gender: common_fun.check_value_or_null(doc, 'gender') || '',
        email: common_fun.check_value_or_null(doc, 'email') || '',
        batch: common_fun.check_value_or_null(doc, 'batch') || '',
        enrollment_year: common_fun.check_value_or_null(doc, 'enrollment_year') || '',
        dob: common_fun.check_value_or_null(doc, 'dob') || '',
        mobile: common_fun.check_value_or_null(doc, 'mobile') || '',
        address: {
          nationality_id: common_fun.check_value_or_null(doc, 'address.nationality_id') || ''
        },
        role: common_fun.check_value_or_null(doc, 'role') || '',
        program_no: common_fun.check_value_or_null(doc, 'program_name') || '',
        status: common_fun.check_value_or_null(doc, 'status') || '',
        isActive: common_fun.check_value_or_null(doc, 'isActive'),
        isDeleted: common_fun.check_value_or_null(doc, 'isDeleted')
      }
    }
    return obj
  }
}

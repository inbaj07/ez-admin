module.exports = {
  list: async (Model, limit, page, query, project) => {
    let response_obj = {}
    try {
      let doc = null
      const perPage = parseInt(limit > 0 ? limit : 10)
      const pageNo = parseInt(page > 0 ? page : 1)

      doc = await Model.find(query, project)
        .skip(perPage * (pageNo - 1))
        .limit(perPage)
      const totalDoc = await Model.find(query).countDocuments().exec()
      if (!doc) {
        response_obj = {
          status: false,
          data: doc
        }
      } else {
        response_obj = {
          status: true,
          totalDoc,
          totalPages: Math.ceil(totalDoc / perPage),
          currentPage: pageNo,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get: async (Model, query, project) => {
    let response_obj = null
    try {
      const doc = await Model.findOne(query, project)
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Not found'
        }
      } else {
        response_obj = {
          status: true,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_sort_limt: async (Model, query, project, sort, limit) => {
    let response_obj = null
    try {
      const doc = await Model.find(query, project).sort(sort).limit(limit)
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Not found'
        }
      } else {
        response_obj = {
          status: true,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  insert: async (Model, objects) => {
    let response_obj = null
    try {
      const doc = await Model.create(objects)
      if (!doc) {
        response_obj = {
          status: false,
          data: 'adding error'
        }
      } else {
        response_obj = {
          status: true,
          data: 'Added successfully',
          responses: doc
        }
        // console.log(doc);
      }
    } catch (error) {
      let objs = error
      // console.log(error);
      // console.log(error.name);
      // console.log(error.code);
      // console.log(error.keyValue);
      // console.log(error.message);
      // console.log(error.name === 'MongoError' && error.code === 11000);
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  update: async (Model, object_id, objects) => {
    let response_obj = null
    try {
      // console.log(object_id, objects);
      const doc = await Model.updateOne({ _id: object_id }, { $set: objects })
      // console.log(doc);
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Updating error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'Updating successful',
            responses: doc
          }
        } else {
          response_obj = {
            status: false,
            data: 'Updating error check parsing data'
          }
        }
      }
    } catch (error) {
      let objs = error
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  update_condition: async (Model, cond, objects) => {
    let response_obj = null
    try {
      // console.log(object_id, objects);
      const doc = await Model.updateOne(cond, objects)
      // console.log(doc);
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Updating error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'Updating successful',
            responses: doc
          }
        } else {
          response_obj = {
            status: false,
            data: 'Updating error check parsing data'
          }
        }
      }
    } catch (error) {
      let objs = error
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  update_condition_array_filter: async (Model, cond, objects, filter) => {
    let response_obj = null
    try {
      // console.log(object_id, objects);
      const doc = await Model.updateOne(cond, objects, filter)
      // console.log(doc);
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Updating error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'Updating successful',
            responses: doc
          }
        } else {
          response_obj = {
            status: false,
            data: 'Updating error check parsing data'
          }
        }
      }
    } catch (error) {
      let objs = error
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  update_many: async (Model, object_id, objects) => {
    let response_obj = null
    try {
      // console.log(object_id, objects);
      const doc = await Model.updateMany({ _id: object_id }, objects)
      // console.log(doc);
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Updating error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'Updating successful',
            responses: doc
          }
        } else {
          response_obj = {
            status: false,
            data: 'Updating error check parsing data'
          }
        }
      }
    } catch (error) {
      let objs = error
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  update_push_pull: async (Model, object_id, objects) => {
    let response_obj = null
    try {
      const doc = await Model.updateOne({ _id: object_id }, objects)
      if (!doc) {
        response_obj = {
          status: false,
          data: 'IDs pushed error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'IDs Pushed/Pulled successful'
          }
        } else {
          response_obj = {
            status: false,
            data: 'IDs Pushed/Pulled error check parsing data'
          }
        }
      }
    } catch (error) {
      let objs = error
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  update_push_pull_many: async (Model, object_id, objects) => {
    let response_obj = null
    try {
      const doc = await Model.updateMany(object_id, objects)
      if (!doc) {
        response_obj = {
          status: false,
          data: 'IDs pushed error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'IDs Pushed/Pulled successful'
          }
        } else {
          response_obj = {
            status: false,
            data: 'IDs Pushed/Pulled error check parsing data'
          }
        }
      }
    } catch (error) {
      let objs = error
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  },

  delete: async (Model, object_id) => {
    let response_obj = null
    try {
      const doc = await Model.updateOne({ _id: object_id }, { $set: { isDeleted: true } })
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Delete error'
        }
      } else {
        if (doc.nModified > 0) {
          response_obj = {
            status: true,
            data: 'Deleted successfully'
          }
        } else {
          response_obj = {
            status: false,
            data: 'Delete error check parsing data'
          }
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_aggregate: async (Model, aggre) => {
    let response_obj = null
    try {
      const doc = await Model.aggregate(aggre)
      const totalDoc = await Model.find({ isDeleted: false }).countDocuments().exec()
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Aggregate error'
        }
      } else {
        if (doc.length > 0) {
          response_obj = {
            status: true,
            totalDoc,
            data: doc
          }
        } else {
          response_obj = {
            status: false,
            data: doc
            // data: 'Error check parshing data : ' + doc
          }
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_aggregate_with_count: async (Model, aggre, query) => {
    let response_obj = null
    try {
      const doc = await Model.aggregate(aggre)
      const totalDoc = await Model.find(query).countDocuments().exec()
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Aggregate error'
        }
      } else {
        // if (doc.length > 0) {
        response_obj = {
          status: true,
          totalDoc,
          data: doc
        }
        // } else {
        //     response_obj = {
        //         status: false,
        //         data: doc
        //         // data: 'Error check parshing data : ' + doc
        //     };
        // }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_aggregate_with_empty: async (Model, aggre) => {
    let response_obj = null
    try {
      const doc = await Model.aggregate(aggre)
      const totalDoc = await Model.find({ isDeleted: false }).countDocuments().exec()
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Aggregate error'
        }
      } else {
        // if (doc.length > 0) {
        response_obj = {
          status: true,
          totalDoc,
          data: doc
        }
        // } else {
        //     response_obj = {
        //         status: false,
        //         data: doc
        //         // data: 'Error check parshing data : ' + doc
        //     };
        // }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_count: async (Model, aggre) => {
    let response_obj = null
    // console.log('Count ', aggre);
    try {
      const totalDoc = await Model.find(aggre).countDocuments().exec()
      response_obj = {
        status: true,
        data: totalDoc
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_aggregate_duplicate_check: async (Model, aggre) => {
    let response_obj = null
    try {
      const doc = await Model.aggregate(aggre)
      const totalDoc = await Model.find({ isDeleted: false }).countDocuments().exec()
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Aggregate error'
        }
      } else {
        response_obj = {
          status: true,
          totalDoc,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_list: async (Model, query, project) => {
    let response_obj = null
    try {
      // console.log(query, project);
      // console.log(query[0].$match.title);
      const doc = await Model.find(query, project)
      // console.log(doc);
      if (doc.length == 0) {
        response_obj = {
          status: false,
          data: 'Not found'
        }
      } else {
        response_obj = {
          status: true,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_list_populate: async (Model, query, project, pop) => {
    let response_obj = null
    try {
      // console.log(query, project);
      // console.log(query[0].$match.title);
      const doc = await Model.find(query, project).populate(pop)
      // console.log(doc);
      if (doc.length == 0) {
        response_obj = {
          status: false,
          data: 'Not found'
        }
      } else {
        response_obj = {
          status: true,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_list_sort: async (Model, query, project, sorts) => {
    let response_obj = null
    try {
      // console.log(query, project);
      // console.log(query[0].$match.title);
      const doc = await Model.find(query, project).sort(sorts)
      // console.log(doc);
      if (doc.length == 0) {
        response_obj = {
          status: false,
          data: 'Not found'
        }
      } else {
        response_obj = {
          status: true,
          data: doc
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  check_id: async (Model, query) => {
    let response_obj = null
    try {
      const ch = query._id.$in
      // console.log(query);
      // console.log(Array.isArray(ch));
      // console.log((query._id.$in));
      const doc = await Model.find(query)
      // console.log(query._id.$in.length, ' : ', doc.length);
      // console.log(doc);
      if (!Array.isArray(ch)) {
        if (doc.length != 0) {
          response_obj = {
            status: true,
            data: doc
          }
        } else {
          response_obj = {
            status: false,
            data: 'Not found'
          }
        }
      } else if ((doc.length != 0) && (query._id.$in.length == doc.length)) {
        response_obj = {
          status: true,
          data: doc
        }
      } else {
        response_obj = {
          status: false,
          data: 'Not found'
        }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  get_aggregate_with_id_match: async (Model, aggre, doc_aggre) => {
    let response_obj = null
    try {
      const doc = await Model.aggregate(aggre)
      const totalDoc = await Model.find(doc_aggre).countDocuments().exec()
      if (!doc) {
        response_obj = {
          status: false,
          data: 'Aggregate error'
        }
      } else {
        response_obj = {
          status: true,
          totalDoc,
          data: doc
        }
        // if (doc.length > 0) {
        //     response_obj = {
        //         status: true,
        //         'totalDoc': totalDoc,
        //         data: doc
        //     };
        // } else {
        //     response_obj = {
        //         status: false,
        //         data: doc
        //         // data: 'Error check parshing data : ' + doc
        //     };
        // }
      }
    } catch (error) {
      response_obj = {
        status: false,
        data: 'Error catch : ' + error
      }
    } finally {
      return response_obj
    }
  },

  bulk_write: async (Model, objects) => {
    let response_obj = null
    try {
      const doc = await Model.bulkWrite(objects)
      if (!doc) {
        response_obj = {
          status: false,
          data: 'adding error'
        }
      } else {
        response_obj = {
          status: true,
          data: 'Added successfully',
          responses: doc
        }
        // console.log(doc);
      }
    } catch (error) {
      let objs = error
      // console.log(error);
      // console.log(error.name);
      // console.log(error.code);
      // console.log(error.keyValue);
      // console.log(error.message);
      // console.log(error.name === 'MongoError' && error.code === 11000);
      if (error.name === 'MongoError' && error.code === 11000) {
        objs = {
          message: 'Duplicate value',
          field: error.keyValue
        }
      } else {
        objs = 'Error catch : ' + error
      }
      response_obj = {
        status: false,
        data: objs
      }
    } finally {
      return response_obj
    }
  }
}

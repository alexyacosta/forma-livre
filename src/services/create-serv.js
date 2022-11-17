import http from "../http-common";

class CreateService {
  getAll() {
    return http.get("/create");
  }

  get(id) {
    return http.get(`/create/${id}`);
  }

  create(data) {
    return http.post("/create", data);
  }

  update(id, data) {
    return http.put(`/create/${id}`, data);
  }

  delete(id) {
    return http.delete(`/create/${id}`);
  }

  deleteAll() {
    return http.delete(`/create`);
  }

  findByTitle(title) {
    return http.get(`/create?title=${title}`);
  }
}

export default new CreateService();
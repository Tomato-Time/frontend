// initialize a new api client class
import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "web_app_token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.err?.message;
      return { data: null, error: message || String(err) };
    }
  }
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }
  async loginUser(credentials) {
    return this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }
  async signupUser(credentials) {
    return this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }
  // list todo items
  async listTodos() {
    return await this.request({ endpoint: `task`, method: `GET` });
  }
  // add a new task to the todo list
  async addTask(task) {
    return await this.request({
      endpoint: `task`,
      method: `POST`,
      data: task,
    });
  }

  async completeTask(task) {
    return await this.request({
      endpoint: `task`,
      method: `PUT`,
      data: task,
    });
  }

  // delete a todo list item
  async deleteTask(taskId) {
    return await this.request({
      endpoint: `task/${taskId}`,
      method: `DELETE`,
    });
  }

  // add time to minutes logged
  async addToUserTimeLog(minutes) {
    return await this.request({
      endpoint: `TimerSession`,
      method: `POST`,
      data: minutes,
    });
  }
  // get the minutes associated with user
  async getUserMinutes(minutes) {
    return await this.request({
      endpoint: `TimerSession/minutes`,
      method: `GET`,
      data: minutes,
    });
  }

  // get round count associated with user
  async getUserRoundCount(minutes) {
    return await this.request({
      endpoint: `TimerSession/round`,
      method: `GET`,
      data: minutes,
    });
  }
}
export default new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
  // "https://focus-4-you.herokuapp.com"
);

const instructions = [
  {
    content: "Login vào máy ảo Ubuntu",
    code: "Username: osboxes\nPassword: osboxes.org",
  },
  { content: "Thoát khỏi phiên làm việc", code: "logout" },
  { content: "Tắt máy chủ (shutdown)", code: "sudo shutdown -h now" },
  { content: "Khởi động lại máy chủ", code: "sudo reboot now" },
  { content: "Kiểm tra RAM", code: "free -m" },
  { content: "Kiểm tra dung lượng đĩa", code: "df -h\nlsblk" },
  { content: "Kiểm tra tiến trình", code: "ps\nps aux" },
  {
    content: "Kiểm tra user và usergroup trong hệ thống",
    code: "cat /etc/passwd",
  },
  { content: "Kiểm tra trạng thái firewall", code: "sudo ufw status verbose" },
  {
    content: "Kiểm tra các gói phần mềm đã cài đặt",
    code: "dpkg -l\nCtrl + C để thoát",
  },
  {
    content: "Kiểm tra trạng thái mạng",
    code: "ping www.google.com\nCtrl + C để thoát",
  },
  { content: "Cài đặt tool network", code: "sudo apt install net-tools" },
  { content: "Kiểm tra các port đang mở", code: "sudo netstat -ntlp" },
  { content: "Kiểm tra IP máy ảo", code: "ifconfig -a" },
  {
    content: "Cài đặt OpenSSH trên Ubuntu",
    code: "sudo apt install openssh-server",
  },
  {
    content: "Kích hoạt SSH và khởi động dịch vụ SSH",
    code: "sudo systemctl enable ssh\nsudo systemctl start ssh",
  },
  { content: "Kiểm tra trạng thái SSH", code: "sudo systemctl status ssh" },
  { content: "Tìm địa chỉ IP của máy ảo Ubuntu", code: "ip a" },
  {
    content: "Kết nối từ Windows tới Ubuntu qua CLI",
    code: "ssh osboxes@<ip_address của máy Ubuntu>",
  },
  { content: "Cập nhật hệ thống Ubuntu", code: "sudo apt-get update" },
  {
    content: "Cài đặt chứng chỉ",
    code: "sudo apt-get install ca-certificates-curl gnupg lsb-release",
  },
  {
    content: "Cài đặt chứng chỉ SSL",
    code: "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg",
  },
  {
    content: "Kiểm tra trạng thái Docker service",
    code: "sudo systemctl status docker",
  },
  { content: "Kiểm tra phiên bản Docker", code: "sudo docker --version" },
  { content: "Kiểm tra Docker image", code: "sudo docker image ls" },
  { content: "Restart server", code: "sudo reboot now" },
  { content: "Shutdown server", code: "sudo shutdown -h now" },
  {
    content: "Ping một địa chỉ IP",
    code: "ping www.google.com\nCtrl + C để thoát",
  },
  { content: "Kiểm tra trạng thái các tiến trình", code: "top" },
  { content: "Kiểm tra dung lượng ổ đĩa", code: "df -h" },
];

let step = 0;

function startTutorial() {
  const table = document.getElementById("instruction-table");
  table.style.display = "table"; // Hiển thị bảng
  const tbody = document.getElementById("instruction-body");

  if (step < instructions.length) {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    row.classList.add("fade-in");

    cell1.textContent = step + 1;
    cell2.textContent = instructions[step].content;
    cell3.innerHTML = `<code>${instructions[step].code}</code>`;
    cell4.innerHTML = `<button class="copy-btn" onclick="copyToClipboard('${instructions[step].code}')">Copy</button>`;

    step++;
    setTimeout(startTutorial, 2000); // Hiển thị từng bước sau 2 giây
  }
}

function copyToClipboard(text) {
  // Tạo một element tạm để sao chép nội dung vào clipboard
  const tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);

  alert("Code đã được sao chép: " + text);
}

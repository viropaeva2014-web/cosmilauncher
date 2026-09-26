{
  "project": "CyberOS Core",
  "version": "1.0.0",
  "distributives": [
    {
      "id": "ubuntu_24",
      "name": "Ubuntu Linux 24.04 LTS",
      "architecture_phone": "https://ubuntu.com",
      "architecture_pc": "https://ubuntu.com",
      "config": {
        "bypass_root": true,
        "graphic_server": "X11_Wayland",
        "default_user": "cyber_user"
      }
    },
    {
      "id": "alpine_320",
      "name": "Alpine Linux 3.20 (Mini)",
      "architecture_phone": "https://alpinelinux.org",
      "architecture_pc": "https://alpinelinux.org",
      "config": {
        "bypass_root": true,
        "graphic_server": "X11",
        "default_user": "root"
      }
    },
    {
      "id": "kali_latest",
      "name": "Kali Linux Light",
      "architecture_phone": "https://kali.download",
      "architecture_pc": "https://kali.download",
      "config": {
        "bypass_root": true,
        "graphic_server": "X11",
        "default_user": "kali"
      }
    }
  ]
}

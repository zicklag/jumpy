const killZoneBorder = 500;

export default {
  updateInGame() {
    let netInfo = NetInfo.get();
    let map = world.query(MapMeta).map((x) => x.components[0])[0];
    if (!map) return;

    let mapWidth = map.grid_size.x * map.tile_size.x;
    let leftKillZone = -killZoneBorder;
    let rightKillZone = killZoneBorder + mapWidth;
    let bottomKillZone = -killZoneBorder;

    for (const { entity, components } of world.query(PlayerIdx, Transform)) {
      let [player_idx, transform] = components;

      if (
        (netInfo.is_client && player_idx[0] == netInfo.player_idx) ||
        !netInfo.is_client
      ) {
        let pos = transform.translation;

        if (
          pos.x < leftKillZone ||
          pos.x > rightKillZone ||
          pos.y < bottomKillZone
        ) {
          Player.kill(entity);
        }
      }
    }
  },
};
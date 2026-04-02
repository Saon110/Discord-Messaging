const messageModel = require("../models/message.model");

exports.listMessages = async ({ serverId, channelId, before, after, limit }) => {
  return messageModel.listMessages({
    serverId,
    channelId,
    before,
    after,
    limit,
  });
};

exports.updateMessage = async ({ channelId, messageId, content, deleteAttachmentIds, hasContent }) => {
  return messageModel.updateMessage({
    channelId,
    messageId,
    content,
    deleteAttachmentIds,
    hasContent,
  });
};

exports.deleteMessage = async ({ channelId, messageId }) => {
  return messageModel.deleteMessage({
    channelId,
    messageId,
  });
};

// ADD REACTION
exports.addReaction = async ({ messageId, userId, emoji }) => {
  return messageModel.addReaction({ messageId, userId, emoji });
};

// REMOVE REACTION
exports.removeReaction = async ({ messageId, userId, emoji }) => {
  return messageModel.removeReaction({ messageId, userId, emoji });
};